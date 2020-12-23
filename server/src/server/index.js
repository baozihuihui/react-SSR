import express from "express";
import { matchRoutes } from "react-router-config";
import { routes } from "../Routes";
import { getStore } from "../store/index";
import { render } from "./render";

const app = express();
const port = 3000;

app.use(express.static("clientDist"));

app.get("*", (req, res) => {
  const store = getStore();
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
