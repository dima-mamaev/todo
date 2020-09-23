import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import NoTodo from "./noTodos";
import {fetchTodos} from "../redux/actions/todos";

const TodoList: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])


    const todos = useSelector((state: IAppState) => state.todoState);



    return (
        <>
            {
                todos.length === 0 && <NoTodo/>
            }
            <>
                <ul className="list-group">

                    {
                        todos.map(todo => {
                            return <TodoItem key={todo.id} todo={todo} />
                        })
                    }
                </ul>
            </>
        </>
    )
}

export default TodoList;
