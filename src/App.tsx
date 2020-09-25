import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Alert from "./components/alertMessage";
import Layout from "./components/LayOut/layout";
import Loader from "./components/loader";
import { IAppState } from "./interfaces/interfaces";
import { fetchTodos } from "./redux/actions/todos";
import RootRoute from "./routes";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line
  }, []);
  const {
    todos: { loaded, loading, error },
  } = useSelector((state: IAppState) => state.todoRequestState);

  return (
    <Layout>
      {loading && <Loader />}
      {loaded && <RootRoute />}
      {error.status && <Alert color="alert alert-danger" />}
    </Layout>
  );
};

export default App;
