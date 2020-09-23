import {IActionRequest, IRequest} from "../../interfaces/interfaces";
import {TODO_ERROR} from "../actions/actionTypes";

const initialState: IRequest = {
    todos: {
        loading: false,
        loaded: false,
        error: false,
        errorMessage: ""
    }
}

const requests = (state: IRequest = initialState, action: IActionRequest) => {
    switch (action.type) {
        case TODO_ERROR :
            return {
                ...state, todos: {
                    ...state.todos,
                    errorMessage: action.payload
                }
            }
        default:
            return state
    }
}

export default requests