import {IAction, ITodo} from "../../interfaces/interfaces";
import {ADD_TODO, DELETE_TODO} from "../actions/actionTypes";

const initialState: ITodo[] = [{title: "todo 1", id: 3565}]

const todo = (state = initialState, action: IAction) => {
    switch (action.type) {
        case DELETE_TODO:
            return [
                ...state.filter(todo => todo.id !== action.payload.id)
            ]
        case ADD_TODO :
            return [
                ...state,
                {
                    title: action.payload.title,
                    id: action.payload.id
                }
            ]
        default:
            return state
    }
}

export default todo