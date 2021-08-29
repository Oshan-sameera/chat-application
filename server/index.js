const express = require("express");
const app = express();

const http = require("http");
const cors = require("cors");

const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST]"],
  },
});

io.on("connection", (socket) => {
  console.log("user Conected", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User WIth iD:", socket.id, "Joined room:", data);
  });

  socket.on("send_message", (date) => {
socket.to(data.room).emit("recive_message",data)
    //console.log("recive_message",date)
  });
  socket.on("disconect", () => {
    console.log("user Diconected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("servere running");
});
