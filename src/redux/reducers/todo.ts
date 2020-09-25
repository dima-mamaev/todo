import { IActionTodo, ITodo } from "../../interfaces/interfaces";
import { ADD_FETCHED_TODO, CLEAR_TODO } from "../actions/actionTypes";

const todo = (state: ITodo[] = [], action: IActionTodo) => {
  switch (action.type) {
    case ADD_FETCHED_TODO:
      return [...action.payload];
    case CLEAR_TODO:
      return [];
    default:
      return state;
  }
};

export default todo;
