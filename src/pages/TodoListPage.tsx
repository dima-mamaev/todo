import React from "react";
import Input from "../components/input";
import TodoList from "../components/todoList";

const TodoListPage: React.FC = () => {
  return (
    <>
      <Input />
      <TodoList />
    </>
  );
};

export default TodoListPage;
