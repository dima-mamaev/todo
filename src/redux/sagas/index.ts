import {all} from 'redux-saga/effects'
import {watchFetchTodo} from "./todos/fetchTodo";
import {watchAddTodo} from "./todos/addTodo";
import {watchDeleteTodo} from "./todos/deleteTodo";
import {watchCheckTodo} from "./todos/checkTodo";

export default function* rootSaga() {
    yield all([
        watchFetchTodo(),
        watchAddTodo(),
        watchDeleteTodo(),
        watchCheckTodo()
    ])
}