import {takeEvery, call} from "redux-saga/effects"
import {ADD_NEW_TODO} from "../../actions/actionTypes";
import {postTodos} from "../../actions/api";


export function* watchAddTodo() {
    yield takeEvery(ADD_NEW_TODO, workerAddTodo)
}

function* workerAddTodo(action: any) {
    yield call(postTodos, action.payload)
}