import {takeEvery, call, put} from "redux-saga/effects"
import {CHECK_TODO, TODO_FETCHING, TODO_FETCHING_ERROR, TODO_FETCHING_SUCCEED} from "../../actions/actionTypes";
import {fetchTodos, updateTodos} from "../../actions/api";
import {addFetchedTodos} from "../../actions/todos";


export function* watchCheckTodo() {
    yield takeEvery(CHECK_TODO, workerCheckTodo)
    yield put({type: TODO_FETCHING})
}

function* workerCheckTodo(action: any) {
    try {
        yield call(updateTodos, action.payload)
        const data = yield call(fetchTodos)
        yield put(addFetchedTodos(data))
        yield put({type: TODO_FETCHING_SUCCEED})
    } catch (e) {
        yield put({type: TODO_FETCHING_ERROR, payload: e})
    }


}