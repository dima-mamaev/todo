import {all} from 'redux-saga/effects'
import {watchFetchTodo} from "./todos/fetchTodo";
import {watchAddTodo} from "./todos/addTodo";

export default function* rootSaga() {
    yield all([
        watchFetchTodo(),
        watchAddTodo()
    ])
}