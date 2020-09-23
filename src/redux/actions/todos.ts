import {ADD_FETCHED_TODO, ADD_NEW_TODO, FETCH_TODO} from "./actionTypes";
import {ITodo} from "../../interfaces/interfaces";


//Fetching & adding todos to store
export const fetchTodos = ()=> ({
    type:FETCH_TODO
})
export const addFetchedTodos = (todos:ITodo[]) => ({
    type: ADD_FETCHED_TODO,
    payload: todos
})
// Adding new todo

export const addNewTodo = (todo: ITodo) => ({
    type: ADD_NEW_TODO,
    payload: todo
})



