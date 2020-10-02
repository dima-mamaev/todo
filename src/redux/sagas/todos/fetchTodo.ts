import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_TODO } from "../../actions/actionTypes";
import { delay, fetchTodos } from "../../actions/api";
import {
  addFetchedTodos,
  clearStore,
  todoFetching,
  todoFetchingError,
  todoFetchingSucceed,
} from "../../actions/todos";
import { ITodo } from "../../../interfaces/interfaces";

export function* watchFetchTodo() {
  yield takeEvery(FETCH_TODO, workerFetchTodo);
  yield put(todoFetching());
}

function* workerFetchTodo() {
  try {
    yield delay(2000);

    const data: ITodo[] = yield call(fetchTodos);
    yield put(addFetchedTodos(data.reverse()));
    yield put(todoFetchingSucceed());
  } catch (e) {
    yield put(todoFetchingError(e));
    yield put(clearStore());
  }
}
