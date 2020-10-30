import "babel-polyfill";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";
import { StaticRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import favicon from "../images/favicon.svg";
import config from "config";
const mongoose = require("mongoose");

const PORT = config.get("port") || 3000;

const server = express();
server.use(express.static("public"));
server.use(express.json({ extended: true }));

// server.use("/api/request", require("./routes/request.routes"));

server.get("*", (req, res) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));
  const html = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </StyleContext.Provider>
  );
  res.send(`
        <htmL>
            <head>
                <title>faila</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="описание">
                <script src="/bundle.js" defer></script>
                <meta name="google-site-verification" content="obtr6HgirSZsZVzAnTH_nyvQDjG5B3tf_AckyI7gVJU" />
                <meta name="keywords" content="ключевые слова">
                <link rel="icon" type="image/svg+xml" href=${favicon}>
                <style>${[...css].join("")}</style>
            </head>
            <body>
              <div id="root">
                ${html}
              </div>
            </body>
        </htmL>
    `);
});

async function start() {
  try {
    // await mongoose.connect(config.get("mongoUri"), {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    server.listen(PORT,"0.0.0.0", () => {
      console.log(`server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("error: ", error.message);
  }
}

start();
