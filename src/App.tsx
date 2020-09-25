import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/LayOut/layout";
import ErrorPage from "./pages/404";
import TodoListPage from "./pages/TodoListPage";
import TodoUpdatePage from "./pages/TodoUpdatePage";

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={TodoListPage} />
        <Route path="/update/:id" component={TodoUpdatePage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Layout>
  );
};

export default App;
