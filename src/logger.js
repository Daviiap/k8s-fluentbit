const pino = require("pino");
const pinoHTTP = require("pino-http");

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

const httpLogger = pinoHTTP({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

module.exports = {
  httpLogger,
  logger,
};
