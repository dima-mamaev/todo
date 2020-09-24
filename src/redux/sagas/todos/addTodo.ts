import {takeEvery, call, put} from "redux-saga/effects"
import {ADD_NEW_TODO, TODO_FETCHING, TODO_FETCHING_ERROR, TODO_FETCHING_SUCCEED} from "../../actions/actionTypes";
import {fetchTodos, postTodos} from "../../actions/api";
import {addFetchedTodos} from "../../actions/todos";


export function* watchAddTodo() {
    yield takeEvery(ADD_NEW_TODO, workerAddTodo)
    yield put({type: TODO_FETCHING})
}

function* workerAddTodo(action: any) {
    try {
        yield call(postTodos, action.payload)
        const data = yield call(fetchTodos)
        yield put(addFetchedTodos(data))
        yield put({type: TODO_FETCHING_SUCCEED})
    } catch (e) {
        yield put({type: TODO_FETCHING_ERROR, payload: e})
    }
}