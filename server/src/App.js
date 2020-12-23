import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";

const App = (props) => {
  return (
    <>
      <Header />
      {renderRoutes(props.route.routes)}
    </>
  );
};

export default App;
