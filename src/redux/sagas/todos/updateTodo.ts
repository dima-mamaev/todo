import { takeEvery, call, put } from "redux-saga/effects";
import { UPDATE_TODO } from "../../actions/actionTypes";
import { fetchTodos, updateTodos } from "../../actions/api";
import {
  addFetchedTodos,
  clearStore,
  todoFetching,
  todoFetchingError,
  todoFetchingSucceed,
} from "../../actions/todos";
import { ITodo } from "../../../interfaces/interfaces";

export function* watchUpdateTodo() {
  yield takeEvery(UPDATE_TODO, workerUpdateTodo);
  yield put(todoFetching());
}

function* workerUpdateTodo(action: any) {
  try {
    yield call(updateTodos, action.payload);
    const data: ITodo[] = yield call(fetchTodos);
    yield put(addFetchedTodos(data.reverse()));
    yield put(todoFetchingSucceed());
  } catch (e) {
    yield put(todoFetchingError(e.message));
    yield put(clearStore());
  }
}
