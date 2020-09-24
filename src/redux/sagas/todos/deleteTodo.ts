import {takeEvery, call, put} from "redux-saga/effects"
import {DELETE_TODO} from "../../actions/actionTypes";
import {deleteTodos, fetchTodos} from "../../actions/api";
import {addFetchedTodos, clearStore, todoFetching, todoFetchingError, todoFetchingSucceed} from "../../actions/todos";
import {ITodo} from "../../../interfaces/interfaces";


export function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO, workerDeleteTodo)
    yield put(todoFetching())
}

function* workerDeleteTodo(action: any) {
    try {
        yield call(deleteTodos, action.payload)
        const data:ITodo[] = yield call(fetchTodos)
        yield put(addFetchedTodos(data.reverse()))
        yield put(todoFetchingSucceed())

    } catch (e) {
        yield put(todoFetchingError(e.message))
        yield put(clearStore())
    }
}