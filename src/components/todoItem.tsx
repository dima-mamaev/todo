import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ITodo } from "../interfaces/interfaces";
import { deleteTodo, updateTodo } from "../redux/actions/todos";

type TodoItem = {
  todo: ITodo;
};

const TodoItem: React.FC<TodoItem> = ({ todo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const classes: string[] = ["p-0 m-0 pl-3"];
  if (todo.finished) {
    classes.push("line-through");
  }

  // Todos handlers (delete & check toggle)
  function onDeleteHandler(todo: ITodo) {
    dispatch(deleteTodo(todo.id!));
  }
  function onCheckHandler(todo: ITodo) {
    todo.finished = !todo.finished;
    dispatch(updateTodo(todo));
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center pr-2">
      <div className="d-flex align-items-center">
        <input
          className="form-check-input mt-0 position-relative ml-2"
          type="checkbox"
          checked={todo.finished}
          onChange={() => onCheckHandler(todo)}
        />
        <p className={classes.join(" ")}>{todo.content} </p>
      </div>
      <div>
        <button
          className="btn btn-warning mr-2"
          onClick={() => history.push(`update/${todo.id}`)}
        >
          Update todo
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteHandler(todo)}
        >
          Delete todo
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
