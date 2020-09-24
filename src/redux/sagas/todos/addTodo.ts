import {takeEvery, call, put} from "redux-saga/effects"
import { ADD_NEW_TODO} from "../../actions/actionTypes";
import { fetchTodos, postTodos} from "../../actions/api";
import {addFetchedTodos, clearStore, todoFetching, todoFetchingError, todoFetchingSucceed} from "../../actions/todos";
import {IActionTodo, ITodo} from "../../../interfaces/interfaces";


export function* watchAddTodo() {
    yield takeEvery(ADD_NEW_TODO, workerAddTodo)
    yield put(todoFetching())
}

function* workerAddTodo(action: IActionTodo) {
    try {
        yield call(postTodos, action.payload)
        const data:ITodo[] = yield call(fetchTodos)

        yield put(addFetchedTodos(data.reverse()))
        yield put(todoFetchingSucceed())
    } catch (e) {
        yield put(todoFetchingError(e.message))
        yield put(clearStore())
    }
}