import React from 'react';
import {ITodo} from "../interfaces/interfaces";

const TodoItem: React.FC<ITodo> = ({title, id}) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p className="p-0 m-0">{title} </p>
            <button> delete</button>
        </li>
    )
}

export default TodoItem;
