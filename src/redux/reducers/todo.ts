import {IActionTodo, ITodo} from "../../interfaces/interfaces";
import {ADD_FETCHED_TODO, ADD_NEW_TODO} from "../actions/actionTypes";

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

        default:
            return state
    }
}

export default todo