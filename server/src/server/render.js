import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../Routes";

export const render = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return getHtmlTemp(content, store);
};

const getHtmlTemp = (content, store) => {
  return `
  <html>
      <head>
          <title>React-SSR</title>
      </head>
      <body>
          <div id="root">${content}</div>
      </body>
      <!-- 注水 -->
      <script>
        window.context = {state:${JSON.stringify(store.getState())}}
      </script>
      <script src="/index.js" ></script>
  </html>
`;
};
