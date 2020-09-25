import React from "react";

type AlertType = {
  message?: string;
  color?: "alert alert-primary" | "alert alert-success" | "alert alert-danger";
};

const Alert: React.FC<AlertType> = ({
  message = "Ooops something went wrong. Please try again later!",
  color = "alert alert-primary",
}) => (
  <div className={`mt-5 mb-5 ${color}`} role="alert">
    {message}
  </div>
);

export default Alert;
