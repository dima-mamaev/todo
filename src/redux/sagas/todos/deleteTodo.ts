import {takeEvery, call} from "redux-saga/effects"
import {DELETE_TODO} from "../../actions/actionTypes";
import {deleteTodos} from "../../actions/api";


export function* watchDeleteTodo() {

    yield takeEvery(DELETE_TODO, workerDeleteTodo)

}

function* workerDeleteTodo(action: any) {
    yield call(deleteTodos, action.payload)
}