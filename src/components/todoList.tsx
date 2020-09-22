import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import {deleteTodo} from "../redux/actions/todos";
import NoTodo from "./noTodos";

const TodoList: React.FC = () => {
    const todos = useSelector((state: IAppState) => state.todo);
    const dispatch = useDispatch()

    function onDeleteHandler(id: number) {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            {
                todos.length === 0 && <NoTodo/>
            }
            <ul className="list-group">
                {
                    todos.map(todo => {
                        return <TodoItem key={todo.id} id={todo.id} title={todo.title} onDelete={onDeleteHandler}/>
                    })
                }
            </ul>
        </>
    )
}

export default TodoList;
