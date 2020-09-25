import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mb-5 mt-5">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      />
    </div>
  );
};

export default Loader;
