const express = require("express");
const cors = require("cors");
const { httpLogger } = require("./logger");

const server = express();

server.use(express.json());
server.use(cors({ origin: "*" }));
server.use(httpLogger);

module.exports = server;
