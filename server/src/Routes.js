import { renderRoutes } from "react-router-config";
import App from "./App.js";
import Home from "./containers/Home";
import Translation from "./containers/Translation";
import NotFound from "./containers/NotFound";

export const routes = [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        key: "home",
        path: "/",
        exact: true,
        component: Home,
        loadData: Home.loadData,
      },
      {
        key: "translation",
        path: "/translation",
        exact: true,
        component: Translation,
        loadData: Translation.loadData,
      },
      {
        component: NotFound,
      },
    ],
  },
];

const Routes = () => renderRoutes(routes);

export default Routes;
