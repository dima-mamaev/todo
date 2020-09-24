import {takeEvery, call, put } from "redux-saga/effects"
import {FETCH_TODO, TODO_FETCHING, TODO_FETCHING_ERROR, TODO_FETCHING_SUCCEED} from "../../actions/actionTypes";
import {fetchTodos} from "../../actions/api";
import {addFetchedTodos} from "../../actions/todos";

export function*  watchFetchTodo () {
    yield takeEvery(FETCH_TODO, workerFetchTodo)
    yield put({type:TODO_FETCHING})
}

function* workerFetchTodo () {
    try {
        const data = yield call(fetchTodos)
        yield put(addFetchedTodos(data))
        yield put({type:TODO_FETCHING_SUCCEED})
    } catch (e) {
        yield put({type:TODO_FETCHING_ERROR, payload:e})
    }
}