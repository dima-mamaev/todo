import React from 'react';

type TodoItem = {
    title: string;
    id: number;
    onDelete(id: number): void
}

const TodoItem: React.FC<TodoItem> = ({title, id, onDelete}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p className="p-0 m-0">{title} </p>
            <button className="btn btn-danger" onClick={() => onDelete(id)}> Delete</button>
        </li>
    )
}

export default TodoItem;
