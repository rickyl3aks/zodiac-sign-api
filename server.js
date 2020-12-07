const jsonServer = require("json-server");
const cors = require("cors");
const express = require("express");
const app = express();
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

server.use(middlewares);
server.use(router);

server.listen(port);
