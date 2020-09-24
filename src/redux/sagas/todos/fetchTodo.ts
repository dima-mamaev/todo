import {takeEvery, call, put} from "redux-saga/effects"
import { FETCH_TODO} from "../../actions/actionTypes";
import {fetchTodos} from "../../actions/api";
import {addFetchedTodos, clearStore, todoFetching, todoFetchingError, todoFetchingSucceed} from "../../actions/todos";
import {ITodo} from "../../../interfaces/interfaces";

export function* watchFetchTodo() {
    yield takeEvery(FETCH_TODO, workerFetchTodo)
    yield put(todoFetching())
}

function* workerFetchTodo() {
    try {
        const data:ITodo[] = yield call(fetchTodos)
        yield put(addFetchedTodos(data))
        yield put(todoFetchingSucceed())
    } catch (e) {
        yield put(todoFetchingError(e.message))
        yield put(clearStore())
    }
}