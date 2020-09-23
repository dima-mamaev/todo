import React from "react";
import Loader from "./loader";

const NoTodo: React.FC = () => {
    return (
        <div className="container text-center">
            <p className="lead">There is no available todos...</p>
            <Loader/>
        </div>
    )
}
export default NoTodo