import {takeEvery, call, put} from "redux-saga/effects"
import {DELETE_TODO, TODO_FETCHING, TODO_FETCHING_ERROR, TODO_FETCHING_SUCCEED} from "../../actions/actionTypes";
import {deleteTodos, fetchTodos} from "../../actions/api";
import {addFetchedTodos} from "../../actions/todos";


export function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO, workerDeleteTodo)
    yield put({type:TODO_FETCHING})

}

function* workerDeleteTodo(action: any) {
    try{
        yield call(deleteTodos, action.payload)
        const data = yield call(fetchTodos)
        yield put(addFetchedTodos(data))
        yield put({type:TODO_FETCHING_SUCCEED})

    }catch (e) {
        yield put({type:TODO_FETCHING_ERROR, payload:e})

    }
}