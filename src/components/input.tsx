import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todos";

const Input: React.FC = () => {
    const [value, setValue] = useState<string>("")
    const dispatch = useDispatch()
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const todoMessage = event.target.value
        if (todoMessage.trim().length === 0) {
            setValue("")
            return
        }
        setValue(todoMessage)
    }
    function onAddHandler(event: React.MouseEvent) {
        if (value.length === 0) {
            return
        }
        dispatch(addTodo(value))
        setValue("")
    }
    return (
        <div className="input-group pt-3 pb-3 m-auto d-flex flex-column">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="form"
                    placeholder="Type your todo"
                    value={value}
                    onChange={onChangeHandler}
                />
                <div className="input-group-append">
                    <button className="input-group-text" onClick={onAddHandler}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Input