import React from "react";

const Input: React.FC = () => {
    return (
        <div className="input-group p-3 m-auto d-flex flex-column">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="form"
                    placeholder="Type your todo"
                />
                <div className="input-group-append">
                    <button className="input-group-text">
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Input