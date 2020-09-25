import React from "react";

const TodoUpdatePage: React.FC = () => {
  return (
    <div className="card mt-5 ">
      <div className="card-body">
        <h5 className="card-title">Update todo dialog:</h5>

        <form>
          <div className="form-group">
            <label htmlFor="content">Todo content:</label>
            <input type="text" className="form-control" id="content" />
            <small id="contentHelp" className="form-text text-muted">
              *Todo content field shouldn't be empty.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoUpdatePage;
