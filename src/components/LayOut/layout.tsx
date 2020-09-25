import React from "react";
import { Link, useLocation } from "react-router-dom";

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand" to="/">
          Todo app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {pathname !== "/" && (
              <Link to="/" className="nav-link">
                Home page
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
