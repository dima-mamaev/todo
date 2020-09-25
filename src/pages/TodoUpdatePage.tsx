import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { IAppState } from "../interfaces/interfaces";

type Inputs = {
  content: string;
  check: boolean;
};

const TodoUpdatePage: React.FC = () => {
  // Receive current todo
  const history = useHistory();
  const { pathname } = useLocation();
  const currentTodoId = +pathname.slice(8);
  const todoList = useSelector((state: IAppState) => state.todoState);
  const currentTodo = todoList.find((todo) => todo.id === currentTodoId);

  //  Form validation

  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="card mt-5 ">
      <div className="card-body">
        <h5 className="card-title">Update todo dialog:</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="content">Todo content:</label>
            <input
              type="text"
              className="form-control"
              id="content"
              name="content"
              placeholder={currentTodo?.content}
              ref={register({ required: true, minLength: 1 })}
            />
            {errors.content && (
              <small id="contentHelp" className="form-text text-muted">
                *Todo content field must contain at least 1 character.
              </small>
            )}
          </div>
          <div className="form-group d-flex flex-column">
            <label>Complete status of todo:</label>
            <select name="check" ref={register}>
              <option value="false">to do</option>
              <option value="true">completed</option>
            </select>
          </div>
          <div className="d-flex justify-content-around">
            <button type="submit" className="btn btn-success">
              Submit changes
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => history.push("/")}
            >
              Go back to the main page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoUpdatePage;
