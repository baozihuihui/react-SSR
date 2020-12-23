import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import { routes } from "../Routes";
import { getStore } from "../store/index";
import { render } from "./render";

const app = express();
const port = 3000;

app.use(express.static("clientDist"));

// 请求地址：  /api/getHomeMessage
// req.url = /getHomeMessage
// return    /api + req.url

app.use(
  "/api",
  proxy("http://localhost:7001", {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    },
  })
);

app.get("*", (req, res) => {
  const store = getStore(req);
  // 根据路由的路径，来往store里面添加数据
  const matchedRoutes = matchRoutes(routes, req.path);
  // 让 matchedRoutes里面所有的组件，对应的loadData方法执行一次
  const promise = [];
  matchedRoutes.forEach((item) => {
    const { route } = item;
    if (route.loadData) {
      promise.push(route.loadData(store));
    }
  });
  Promise.all(promise).then(() => {
    res.send(render(req, store));
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
