import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState, IRequest, ITodo} from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import {deleteTodo, fetchTodos, checkTodo} from "../redux/actions/todos";
import Loader from "./loader";

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [request, setRequest] = useState<IRequest>({})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    const todoList = useSelector((state: IAppState) => state.todoState);
    useEffect(() => {
        setTodos([...todoList])
    }, [todoList])
    const requestTodo = useSelector((state: IAppState) => state.todoRequestState);
    useEffect(() => {
        setRequest({...requestTodo})
    }, [requestTodo])


    function onDeleteHandler(id: number) {
        dispatch(deleteTodo(id))
    }

    function onCheckHandler(todo: ITodo) {
        dispatch(checkTodo(todo))
    }


    return (
        <>
            {
                request.todos?.loading && <Loader/>
            }
            <>
                {
                    todos.length === 0 && !request.todos?.loading  ? <p>no todos message</p> : <ul className="list-group">
                        {
                            todos.map(todo => {
                                return <TodoItem key={todo.id}
                                                 todo={todo}
                                                 onDelete={onDeleteHandler}
                                                 onCheck={onCheckHandler}/>
                            })
                        }
                    </ul>
                }

            </>
        </>
    )
}

export default TodoList;
