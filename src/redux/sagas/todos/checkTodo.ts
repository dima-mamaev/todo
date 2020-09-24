import {takeEvery, call, put} from "redux-saga/effects"
import {CHECK_TODO} from "../../actions/actionTypes";
import {fetchTodos, updateTodos} from "../../actions/api";
import {addFetchedTodos, clearStore, todoFetching, todoFetchingError, todoFetchingSucceed} from "../../actions/todos";
import {ITodo} from "../../../interfaces/interfaces";


export function* watchCheckTodo() {
    yield takeEvery(CHECK_TODO, workerCheckTodo)
    yield put(todoFetching())
}

function* workerCheckTodo(action: any) {
    try {
        yield call(updateTodos, action.payload)
        const data: ITodo[] = yield call(fetchTodos)
        yield put(addFetchedTodos(data))
        yield put(todoFetchingSucceed())
    } catch (e) {
        yield put(todoFetchingError(e.message))
        yield put(clearStore())
    }
}