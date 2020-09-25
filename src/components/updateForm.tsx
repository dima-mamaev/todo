import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ITodo } from "../interfaces/interfaces";
import { updateTodo } from "../redux/actions/todos";

type UpdateFormType = {
  todo: ITodo;
};
type Inputs = {
  id: number;
  content: string;
  finished: boolean;
};

const UpdateForm: React.FC<UpdateFormType> = ({ todo }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    const newTodo: ITodo = {
      id: todo.id,
      content: data.content,
      finished: todo.finished,
    };
    dispatch(updateTodo(newTodo));
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

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
              placeholder={todo.content}
              ref={register({ required: true, minLength: 1 })}
            />
            {errors.content && (
              <small id="contentHelp" className="form-text text-muted">
                *Todo content field must contain at least 1 character.
              </small>
            )}
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

export default UpdateForm;
