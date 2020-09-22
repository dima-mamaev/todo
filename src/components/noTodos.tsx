import React from "react";

const NoTodo: React.FC = () => {
    return (
        <div className="container text-center">
            <p className="lead">Please type your todo in input above!</p>
            <div className="spinner-grow" role="status">
            </div>
        </div>

    )

}

export default NoTodo