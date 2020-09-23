import {takeEvery, call} from "redux-saga/effects"
import {CHECK_TODO} from "../../actions/actionTypes";
import {updateTodos} from "../../actions/api";


export function* watchCheckTodo() {
    yield takeEvery(CHECK_TODO, workerCheckTodo)
}

function* workerCheckTodo(action: any) {
    yield call(updateTodos, action.payload)
}