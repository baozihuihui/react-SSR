import { renderRoutes } from "react-router-config";
import App from "./App.js";
import Home from "./containers/Home";
import Login from "./containers/Login";

export const routes = [
  {
    key: "app",
    path: "/",
    component: App,
    routes: [
      {
        key: "home",
        path: "/home",
        component: Home,
        loadData: Home.getHomelist,
      },
      {
        key: "login",
        path: "/login",
        component: Login,
      },
    ],
  },
];

const Routes = () => renderRoutes(routes);

export default Routes;
