# 在 SSR 框架中引入路由机制

本章将给大家讲解如何在当前的 SSR 框架中引入 React-Router，从而使得我们的服务器端渲染框架能够支持路由跳转，SSR 的路由跳转比前端路由或后端路由都要复杂一些，这张我们将细致的讲解整个 SSR 路由的执行流程。

## SSR 流程

1. 服务器端运行 React 代码渲染出 HTML
2. 发送 HTML 给浏览器
3. 浏览器接收到内容展示
4. 浏览器加载 js 文件
5. JS 中的 React 代码在浏览器端重新执行
6. JS 中的 React 代码接管页面操作
7. JS 代码拿到浏览器上的地址
8. JS 代码根据地址返回不同的路由内容

## 服务器端渲染中的路由

- 服务器端执行一次路由代码
- 客户端页执行一次路由代码

### 服务器端执行路由代码

利用 react-router-dom 中的 \<StaticRouter /> 进行包裹。`renderToString()`不直接处理 React 组件，而是返回一个路由组件，由\<Route />来进行引入 React 组件。其中 StaticRouter 要求接收一个 location 表示当前请求路由，可以使用 express.req.path。

### 客户端执行路由代码

与客户端添加路由一致，`ReactDom.render()`处理一个由 \<BrowserRouter> 包裹的路由组件即可。

## 服务器端渲染多路由

因为 \<StaticRouter /> 的 location 字段需要 req.path，作为路由输入。那么必然需要写在 get 接收器 中 ，想要匹配多路由，就需要将 get 选择器的匹配改为* `app.get("*",(req,res)=>{})` 这样就能匹配陪哦路由了，
