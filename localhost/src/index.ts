import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import cors from "cors";
// 引入 路由控制器 自动执行装饰器
import "./controller/HomeMessageController";
import "./controller/LoginController";
import router from "./router";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(
  cookieSession({
    name: "session",
    keys: ["FattyCat"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(router);

app.listen(7001, () => {
  console.log("server is running...\n");
  console.log("Please see http://localhost:7001");
});
