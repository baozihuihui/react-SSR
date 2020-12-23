import { renderRoutes } from "react-router-config";
import App from "./App.js";
import Home from "./containers/Home";
import Translation from "./containers/Translation";

export const routes = [
  {
    key: "app",
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        key: "home",
        path: "/home",
        component: Home,
        loadData: Home.loadData,
      },
      {
        key: "translation",
        path: "/translation",
        component: Translation,
        loadData: Translation.loadData,
      },
    ],
  },
];

const Routes = () => renderRoutes(routes);

export default Routes;
