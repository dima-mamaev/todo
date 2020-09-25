import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../pages/404";
import TodoListPage from "../pages/TodoListPage";
import TodoUpdatePage from "../pages/TodoUpdatePage";

const RootRoute: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={TodoListPage} />
      <Route path="/update/:id" component={TodoUpdatePage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default RootRoute;
