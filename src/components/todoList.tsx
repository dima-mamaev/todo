import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState, ITodo } from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import { deleteTodo, updateTodo } from "../redux/actions/todos";
import Alert from "./alertMessage";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: IAppState) => state.todoState);

  // Todos handlers (delete & check toggle)
  function onDeleteHandler(todo: ITodo) {
    dispatch(deleteTodo(todo.id!));
  }
  function onCheckHandler(todo: ITodo) {
    todo.finished = !todo.finished;
    dispatch(updateTodo(todo));
  }
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDeleteHandler}
              onCheck={onCheckHandler}
            />
          );
        })}
      </ul>
      {todos.length === 0 && (
        <Alert
          color="alert alert-primary"
          message="There are no todos in a list. Just add some new in input below."
        />
      )}
    </>
  );
};

export default TodoList;
