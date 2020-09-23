import React from 'react';
import {ITodo} from "../interfaces/interfaces";

type TodoItem = {
    todo: ITodo;
}

const TodoItem: React.FC<TodoItem> = ({ todo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center pr-2">
            <input className="form-check-input mt-0 position-relative ml-2" type="checkbox" checked={todo.finished}
                   onChange={() => null}/>
            <p className="p-0 m-0">{todo.content} </p>
            <button className="btn btn-danger" onClick={() => null}> Delete</button>
        </li>
    )
}

export default TodoItem;
