import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../common/routeConfig";

export const render = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const cssArr = context.cssArr.length ? context.cssArr : "";
  return getHtmlTemp(content, store, cssArr);
};

const getHtmlTemp = (content, store, cssArr) => {
  return `
  <html>
      <head>
          <title>React-SSR</title>
          <style id="server-css" >${cssArr.join("\n")}</style>
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
