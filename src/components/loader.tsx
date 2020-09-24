import React from "react";

type LoaderType = {
    message?:string
}


const Loader: React.FC<LoaderType> = ({message="Loading....."}) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center" >
                <p className="p-0 m-0" >{message}</p>
                <div className="spinner-grow text-primary" role="status"/>
            </div>
        </div>
    )
}



export default Loader