import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mb-2">
      <div className="spinner-grow text-primary" role="status" />
    </div>
  );
};

export default Loader;
