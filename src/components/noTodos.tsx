import React from "react";
import Loader from "./loader";
import Alert from "./alertMessage";

const NoTodo: React.FC = () => {
    return (
        <div className="container text-center pl-0 pr-0 ">
            <Alert message={"There is no available todos..."}/>
            <Loader/>
        </div>
    )
}
export default NoTodo