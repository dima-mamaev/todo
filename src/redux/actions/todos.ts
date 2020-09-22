import {ADD_TODO} from "./actionTypes";
import {IAction} from "../../interfaces/interfaces";

export const addTodo = (title:string) : IAction => ({
    type: ADD_TODO,
    payload: {
       title,
        id: Math.random()
    }
})