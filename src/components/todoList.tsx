import React from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import Alert from "./alertMessage";

const TodoList: React.FC = () => {
  const todos = useSelector((state: IAppState) => state.todoState);

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
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
