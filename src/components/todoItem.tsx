import React from 'react';
import {ITodo} from "../interfaces/interfaces";

type TodoItem = {
    todo: ITodo;
    onDelete(id: number): void;
    onCheck(todo: ITodo): void
}

const TodoItem: React.FC<TodoItem> = ({todo, onDelete, onCheck}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center pr-2">
            <div className="d-flex align-items-center" >
                <input className="form-check-input mt-0 position-relative ml-2"
                       type="checkbox"
                       checked={todo.finished}
                       onChange={() => onCheck(todo)}/>
                <p className="p-0 m-0 pl-3">{todo.content} </p>
            </div>
            <button className="btn btn-danger" onClick={() => onDelete(todo.id)}> Delete</button>
        </li>
    )
}

export default TodoItem;
