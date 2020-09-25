import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="jumbotron mt-5">
      <h1 className="display-4">404 PAGE NOT FOUND</h1>
      <hr className="my-4" />
      <p>
        Check that you typed the address correctly, go back to your previous
        page or try using our site search to find something specific.
      </p>
      <hr className="my-4" />
      <Link to="/">
        <button type="button" className="btn btn-success">
          Go to home page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
