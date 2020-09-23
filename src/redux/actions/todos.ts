import {ADD_TODO, CHECK_TODO, DELETE_TODO} from "./actionTypes";
import {IActionTodo} from "../../interfaces/interfaces";

export const addTodo = (content: string): IActionTodo => ({
    type: ADD_TODO,
    payload: {
        content: content,
        id: Math.round(Math.random()*1000),
        finished: false
    }
})

export const deleteTodo = (id: number): IActionTodo => ({
    type: DELETE_TODO,
    payload: {
        id
    }
})

export const checkTodo = (id: number): IActionTodo => ({
    type: CHECK_TODO,
    payload: {
        id
    }
})