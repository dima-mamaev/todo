import React from "react";
import { useHistory } from "react-router-dom";

type UpdateErrorType = {
  id: number;
};

const UpdateError: React.FC<UpdateErrorType> = ({ id }) => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 3000);

  return (
    <div className="jumbotron jumbotron-fluid mt-3">
      <div className="container">
        <h1 className="display-4">Error</h1>
        <p className="lead">
          Todo with id: {id} doesn't exist. Redirecting to main page....
        </p>
      </div>
    </div>
  );
};

export default UpdateError;
