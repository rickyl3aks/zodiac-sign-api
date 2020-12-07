const jsonServer = require("json-server");
const cors = require("cors");
const express = require("express");
const app = express();
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin: http://www.google.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);
