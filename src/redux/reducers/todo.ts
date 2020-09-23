import {IActionTodo, ITodo} from "../../interfaces/interfaces";
import {ADD_TODO, CHECK_TODO, DELETE_TODO, PUT_TODO} from "../actions/actionTypes";

const initialState: ITodo[] = [{content: "todo 1", id: Math.random(), finished: false}]

const todo = (state = initialState, action: IActionTodo) => {
    switch (action.type) {
        case DELETE_TODO:
            return [
                ...state.filter(todo => todo.id !== action.payload.id)
            ]
        case ADD_TODO :
            return [
                ...state,
                {
                    content: action.payload.content,
                    id: action.payload.id,
                    finished: action.payload.finished
                }
            ]
        case CHECK_TODO:
            return [
                ...state.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.finished = !todo.finished
                    }
                    return todo
                })
            ]
        case PUT_TODO:
            return [
                ...state, ...action.payload
            ]
        default:
            return state
    }
}

export default todo