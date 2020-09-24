import {combineReducers} from "redux";
import todo from "./reducers/todo";
import todoRequests from "./reducers/requests/todoRequests";


export default combineReducers({
    todoState: todo,
    todoRequestState: todoRequests,
})

