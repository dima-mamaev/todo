import React from 'react';
import {useSelector} from "react-redux";
import {IAppState} from "../interfaces/interfaces";
import TodoItem from "./todoItem";

const TodoList: React.FC = () => {
    const todos = useSelector((state:IAppState) => state.todo);

    console.log(todos)
    return (
        <ul className="list-group">
            {
                todos.map(todo => {
                    return <TodoItem  key={todo.id} id={todo.id} title={todo.title} />
                })
            }

        </ul>
    )
}

export default TodoList;
