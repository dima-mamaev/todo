import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState, IRequest, ITodo} from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import {deleteTodo, fetchTodos, checkTodo} from "../redux/actions/todos";
import Loader from "./loader";
import Alert from "./alertMessage";

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [request, setRequest] = useState<IRequest>({})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
        // eslint-disable-next-line
    }, [])
    const todoList = useSelector((state: IAppState) => state.todoState);
    const requestTodo = useSelector((state: IAppState) => state.todoRequestState);
    useEffect(() => {
        setTodos([...todoList])
    }, [todoList])
    useEffect(() => {
        setRequest({...requestTodo})
    }, [requestTodo])


    function onDeleteHandler(id: number) {
        dispatch(deleteTodo(id))

    }

    function onCheckHandler(todo: ITodo) {
        todo.finished = !todo.finished
        dispatch(checkTodo(todo))
    }


    return (
        <>
            {// eslint-disable-next-line
                request.todos?.loading || request.todos?.error.status && <Loader/>
            }
            {
                request.todos?.error.message.includes("Failed to fetch") &&
                <Alert message="Server is not available at the moment, try again later!"/>
            }
            <>
                {
                    todos.length === 0 && !request.todos?.loading ?
                        <Alert color="alert alert-primary"
                               message="There are no todos in a list. Just add some new in input below."/> :
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
                }
            </>
        </>
    )
}

export default TodoList;
