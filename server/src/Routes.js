import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

const Routes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </>
);

export default Routes;