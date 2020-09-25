import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UpdateError from "../components/updateError";
import UpdateForm from "../components/updateForm";
import { IAppState } from "../interfaces/interfaces";

const TodoUpdatePage: React.FC = () => {
  // Receive current todo id
  const { pathname } = useLocation();
  const currentTodoId = +pathname.slice(8);
  const todoList = useSelector((state: IAppState) => state.todoState);
  const currentTodo = todoList.find((todo) => todo.id === currentTodoId);

  return (
    <>
      {currentTodo ? (
        <UpdateForm todo={currentTodo!} />
      ) : (
        <UpdateError id={currentTodoId} />
      )}
    </>
  );
};

export default TodoUpdatePage;
