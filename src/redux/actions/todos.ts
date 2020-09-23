import {ADD_FETCHED_TODO, ADD_NEW_TODO, DELETE_TODO, FETCH_TODO, CHECK_TODO} from "./actionTypes";
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

//Delete todo
export const deleteTodo = (id:number) => ({
    type: DELETE_TODO,
    payload: id
})

// Check todo
export const checkTodo = (todo: ITodo) => ({
    type: CHECK_TODO,
    payload: todo
})


