import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState, ITodo} from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import NoTodo from "./noTodos";
import {deleteTodo, fetchTodos, checkTodo} from "../redux/actions/todos";

const TodoList: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    const todos = useSelector((state: IAppState) => state.todoState);


    function onDeleteHandler(id: number) {
        dispatch(deleteTodo(id))
    }

    function onCheckHandler(todo: ITodo) {

        dispatch(checkTodo(todo))
    }


    return (
        <>
            {
                todos.length === 0 && <NoTodo/>
            }
            <>
                <ul className="list-group">

                    {
                        todos.map(todo => {
                            return <TodoItem key={todo.id}
                                             todo={todo}
                                             onDelete={onDeleteHandler}
                                             onCheck={onCheckHandler}/>
                        })
                    }
                </ul>
            </>
        </>
    )
}

export default TodoList;
