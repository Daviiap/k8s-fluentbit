const server = require("./server");
const { logger } = require("./logger");

const serverPort = process.env.SERVER_PORT || 3000;

server.get("/", (_, res) => {
  try {
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
});

server.listen(serverPort, () => {
  logger.info(`Server running on port ${serverPort}`);
});
