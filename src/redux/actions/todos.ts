import {ADD_TODO, DELETE_TODO} from "./actionTypes";
import {IAction} from "../../interfaces/interfaces";

export const addTodo = (title: string): IAction => ({
    type: ADD_TODO,
    payload: {
        title,
        id: Math.random()
    }
})

export const deleteTodo = (id: number) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
})