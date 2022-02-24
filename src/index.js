const server = require("./server");

const serverPort = process.env.SERVER_PORT || 3000;

server.get("/", (_, res) => {
  try {
    console.log("Request received!");

    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
});

server.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}`);
});
