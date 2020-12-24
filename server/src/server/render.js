import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import {
  StylecssContext,
  createContext,
} from "../common/context/StylecssContext";
import Routes from "../common/routeConfig";

export const render = (req, store, context) => {
  const cssContext = new createContext();
  const content = renderToString(
    <StylecssContext.Provider value={cssContext}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    </StylecssContext.Provider>
  );

  const cssString = cssContext.getCssString();
  return getHtmlTemp(content, store, cssString);
};

const getHtmlTemp = (content, store, cssString) => {
  const helmet = Helmet.renderStatic();

  return `
  <html ${helmet.htmlAttributes.toString()}>
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          <style id="server-css" >${cssString}</style>
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
