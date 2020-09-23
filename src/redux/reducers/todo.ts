import {IActionTodo, ITodo} from "../../interfaces/interfaces";
import {ADD_FETCHED_TODO, ADD_NEW_TODO, DELETE_TODO, CHECK_TODO} from "../actions/actionTypes";

const todo = (state:ITodo[] = [],  action: IActionTodo) => {
    switch (action.type) {
        case ADD_FETCHED_TODO:
            return [
                ...state, ...action.payload
            ]
        case ADD_NEW_TODO:
            return [
                ...state, action.payload
            ]
        case DELETE_TODO:
            return [
                ...state.filter(todo => todo.id !== action.payload)
            ]
        case CHECK_TODO:
            return [
                ...state.map(todo => {
                    if (todo.id === action.payload.id){
                        todo.finished = !todo.finished
                    }
                    return todo
                })
            ]
        default:
            return state
    }
}

export default todo