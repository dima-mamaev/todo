import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import {checkTodo, deleteTodo} from "../redux/actions/todos";
import NoTodo from "./noTodos";

const TodoList: React.FC = () => {
    const todos = useSelector((state: IAppState) => state.todoState);
    const dispatch = useDispatch()

    function onDeleteHandler(id: number) {
        dispatch(deleteTodo(id))
    }

    function checkHandler(id: number) {
        dispatch(checkTodo(id))
    }

    return (
        <>
            {
                todos.length === 0 && <NoTodo/>
            }
            <ul className="list-group">
                {
                    todos.map(todo => {
                        return <TodoItem key={todo.id} todo={todo} onDelete={onDeleteHandler} onCheck={checkHandler}/>
                    })
                }
            </ul>
        </>
    )
}

export default TodoList;
