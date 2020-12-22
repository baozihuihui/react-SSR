import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "../store/index";
import Routes from "../Routes";

export const render = (req) => {
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
  <html>
      <head>
          <title>React-SSR</title>
      </head>
      <body>
          <div id="root">${content}</div>
      </body>
      <script src="/index.js" ></script>
  </html>
`;
};
