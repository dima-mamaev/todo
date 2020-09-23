import {ADD_TODO, CHECK_TODO, DELETE_TODO, LOAD_TODO, PUT_TODO} from "./actionTypes";
import {IActionTodo, ITodo} from "../../interfaces/interfaces";

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

export const loadTodo = ()=> ({
    type:LOAD_TODO
})


type putTodoType = {
    type: string;
    payload: ITodo[]
}

export const putTodo = (todos:ITodo[]) :putTodoType  => ({
    type: PUT_TODO,
    payload: todos
})
