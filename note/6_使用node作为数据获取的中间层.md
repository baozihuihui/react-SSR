# 使用 Node 作为数据获取中间层

本章将讲解真正服务器端渲染中的代码架构体系，Node.js 如何在这个体系中充当中间层的作用，这里面我们将详细讲解数据代理转发，cookie 登陆状态传递，axios 实例等概念。

## node 变为代理服务器

让 SSR 不再直接请求后端(数据服务器)，而是请求 node 中间层服务器，让 node 去做中转。这样能更有划分功能。

### node 中间件 添加 代理

```language=javascript
 // $ npm install express-http-proxy --save
 import proxy from 'express-http-proxy';
app.use(
  "/api",
  proxy("http://localhost:7001", {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    },
  })
);
```

### 修改 axios 请求地址，添加 axios 实例，根据客户端、服务端设置不同的 baseURL

存在的问题

将 请求服务端地址 `http://localhost:7001/api/getHomeMessage` 变为 `/api/getHomeMessage`，在不同环境下又不同解释

- 浏览器运行

  /api/getHomeMessage = `http://localhost:3000/api/getHomeMessage`

- 服务器运行

  /api/getHomeMessage = 服务器根目录下/api/getHomeMessage ,这样请求会出现问题，因为默认是 80 端口

解决方法如下：

- axios 请求中全部指定请求 node 服务器地址与端口

  axios.get("http://localhost:3000/api/getHomeMessage")

  缺点：不优雅，而且服务器变更需要变更大量代码

- 创建 axios 实例，指定 BaseURL 为服务器地址

  ```language=javascript
  export const axios = axios.create({baseURL:'http://localhost:3000'});
  fucntion(dispatch){ axios.get('/api/getHomeMessage') }
  ```

  缺点：服务端是所有请求公用同一个实例

- 指定 node 服务器地址 端口为 8080

  express().listen(80,()=>{})

  缺点：可能会出现端口占用

- 利用 redux-thunk 的 withExtraArgument 将 axiosInstance 传递到异步 action 中

  ```language=javascript
    const serverAxios = axios.create({baseURL:'http://localhost:3000'});
    const store = createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios)));
    // 调用的时候就可以通过第三个参数获取到变量了
    fucntion(dispatch,getState,axios){ axios.get('/api/getHomeMessage') }
  ```

  缺点：状态管理使用异步函数限定比较死
