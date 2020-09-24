import {IActionRequest, IRequest} from "../../../interfaces/interfaces";
import {TODO_FETCHING, TODO_FETCHING_ERROR, TODO_FETCHING_SUCCEED} from "../../actions/actionTypes";

export const initialState: IRequest = {
    todos: {
        loading: false,
        loaded: false,
        error: {
            status: false,
            message: ""
        }
    }
}

const todoRequests = (state = initialState, action: IActionRequest) => {
    switch (action.type) {
        case TODO_FETCHING :
            return {
                ...state, todos: {
                    ...state.todos,
                    loading: true,
                    loaded: false,
                    error: {
                        status: false,
                        message: ""
                    }
                }
            }
        case TODO_FETCHING_SUCCEED :
            return {
                ...state, todos: {
                    ...state.todos,
                    loading: false,
                    loaded: true,
                    error: {
                        status: false,
                        message: ""
                    }
                }
            }
        case TODO_FETCHING_ERROR :
            return {
                ...state, todos: {
                    ...state.todos,
                    loading: false,
                    loaded: false,
                    error: {
                        status: true,
                        message: action.payload
                    }
                }
            }
        default:
            return state
    }
}

export default todoRequests