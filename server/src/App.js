import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { checkIsLogin } from "./components/Header/store";

const App = (props) => {
  return (
    <>
      <Header />
      {renderRoutes(props.route.routes)}
    </>
  );
};

App.loadData = (store) => {
  return store.dispatch(checkIsLogin());
};

export default App;
