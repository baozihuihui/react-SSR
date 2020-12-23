import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

export const routes = [
  {
    key: "home",
    path: "/",
    exact: true,
    component: Home,
    loadData: Home.getHomelist,
  },
  {
    key: "login",
    path: "/login",
    component: Login,
  },
];

const Routes = () => routes.map((route) => <Route {...route} />);

export default Routes;
