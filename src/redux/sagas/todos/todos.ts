import {takeEvery, call, put } from "redux-saga/effects"
import {LOAD_TODO} from "../../actions/actionTypes";
import {fetchTodos} from "../../actions/api";
import {putTodo} from "../../actions/todos";

export function*  watchLoadTodo () {
    yield takeEvery(LOAD_TODO, workerLoadTodo)
}

function* workerLoadTodo () {
    const data = yield call(fetchTodos)
    yield put(putTodo(data))
}