import {takeEvery, call, put } from "redux-saga/effects"
import {FETCH_TODO} from "../../actions/actionTypes";
import {fetchTodos} from "../../actions/api";
import {addFetchedTodos} from "../../actions/todos";



export function*  watchFetchTodo () {
    yield takeEvery(FETCH_TODO, workerFetchTodo)
}

function* workerFetchTodo () {
        const data = yield call(fetchTodos)
        yield put(addFetchedTodos(data))
}