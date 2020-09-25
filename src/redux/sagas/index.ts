import { all } from "redux-saga/effects";
import { watchFetchTodo } from "./todos/fetchTodo";
import { watchAddTodo } from "./todos/addTodo";
import { watchDeleteTodo } from "./todos/deleteTodo";
import { watchUpdateTodo } from "./todos/updateTodo";

export default function* rootSaga() {
  yield all([
    watchFetchTodo(),
    watchAddTodo(),
    watchDeleteTodo(),
    watchUpdateTodo(),
  ]);
}
