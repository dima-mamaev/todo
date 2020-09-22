import React from 'react';

const TodoList: React.FC = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <p className="p-0 m-0"> todo </p>
                <button> delete</button>
            </li>
        </ul>
    )
}

export default TodoList;
