import React, {useState} from "react";
import Alert from "./alertMessage";
import {useDispatch} from "react-redux";
import {addNewTodo} from "../redux/actions/todos";
import {ITodo} from "../interfaces/interfaces";

const Input: React.FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>("")
    const [inputError, setInputError] = useState<boolean>(false)
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputError(false)
        const todoMessage = event.target.value
        if (todoMessage.trim().length === 0) {
            setValue("")
            return
        }
        setValue(todoMessage)
    }
    function onAddHandler(event: React.MouseEvent) {
        if (value.length === 0) {
            setInputError(true)
            return
        }
        const newTodo:ITodo = {
            id: Math.round(Math.random()*100),
            content: value,
            finished:false
        }
        dispatch(addNewTodo(newTodo))
        setValue("")
    }

    return (
        <div className="input-group pt-3 pb-3 m-auto d-flex flex-column">
            {
                inputError &&  <Alert message={"Typed data is empty or invalid"}  color={"alert alert-danger"} />
            }

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