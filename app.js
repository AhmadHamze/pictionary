const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("./public"));

const server = app.listen(5000);
const io = socket(server);

io.sockets.on("connection", (socket) => {
  console.log(`new connection: ${socket.id}`);
});
