import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState, IRequest, ITodo} from "../interfaces/interfaces";
import TodoItem from "./todoItem";
import {deleteTodo, fetchTodos, checkTodo} from "../redux/actions/todos";
import Loader from "./loader";
import Alert from "./alertMessage";
import Modal from "./modal";

type ModalMessageType = {
    show: boolean,
    message: string
}


const TodoList: React.FC = () => {
    const dispatch = useDispatch()

    //Todos fetching, todos state
    const [todos, setTodos] = useState<ITodo[]>([])
    const [request, setRequest] = useState<IRequest>({})

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

    // Todos handlers (delete & check toggle)
    function onDeleteHandler(todo: ITodo) {
        dispatch(deleteTodo(todo.id!))
        modalMessage(` Todo with: content : ${todo.content};id:${todo.id};deleted successfully.`)
    }

    function onCheckHandler(todo: ITodo) {
        todo.finished = !todo.finished
        dispatch(checkTodo(todo))
    }


    // Modal information window
    const [modal, setModal] = useState<ModalMessageType>({show: false, message: ""})

    function modalMessage(message: string): void {
        setModal({show: true, message})
        setTimeout(() => {
            setModal({show: false, message: ""})
        }, 5000)
    }

    function modalMessageClose() {
        setModal({show: false, message: ""})
    }

    return (
        <>
            {
                request.todos?.error.status === true &&
                <Alert message="Server is not available at the moment, try again later!"
                       color="alert alert-danger"/>
            }
            {
                modal.show && <Modal message={modal.message} onClose={modalMessageClose}/>
            }
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
            {
                request.todos?.loading && <Loader/>
            }
            {
                !requestTodo.todos.loading && todoList.length === 0 && !requestTodo.todos.error.status ?
                    <Alert color="alert alert-primary"
                           message="There are no todos in a list. Just add some new in input below."/> : null
            }
        </>
    )
}

export default TodoList;
