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
  const promises = [];
  matchedRoutes.forEach((item) => {
    const { route } = item;
    if (route.loadData) {
      // 保证 Promise.all 永远能执行结束，而不会因为某个 loaddata导致 全部加载失败
      const promise = new Promise((res) => {
        route.loadData(store).then(res).catch(res);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    const context = {};
    const html = render(req, store, context);
    // 利用 staticContext 处理 服务端 重定向
    if (context.action === "REPLACE") {
      res.redirect(301, context.url);
    }
    // 利用 staticContext 处理 服务端 404
    if (context.NOT_FOUND) {
      res.status(404);
      res.send("Sorry ,page is not found");
    } else {
      res.send(html);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
