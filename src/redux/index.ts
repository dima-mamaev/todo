import {combineReducers} from "redux";
import todo from "./reducers/todo";
import requests from "./reducers/requests";


export default combineReducers({
    todoState: todo,
    requestState: requests,
})

