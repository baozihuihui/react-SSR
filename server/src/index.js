import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./container/Home";

const app = express();
const port = 3000;
const content = renderToString(<Home />);

app.get("/", (req, res) =>
  res.send(`
    <html>
        <head>
            <title>React-SSR</title>
        </head>
        <body>
            ${content}
        </body>
    </html>
`)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
