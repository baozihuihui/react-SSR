import express from "express";
import bodyParser from "body-parser";
// 引入 路由控制器 自动执行装饰器
import "./controller/HomeMessageController";
import router from "./router";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(7001, () => {
  console.log("server is running...\n");
  console.log("Please see http://localhost:7001");
});
