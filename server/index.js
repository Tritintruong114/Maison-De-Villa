import express from "express";
const app = express();
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

app.use(cors());
const server = http.createServer(app);
const CHAT_BOT = "ChatBot";
let chatRoom = ""; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  // We can write our socket event listeners in here...
  socket.on("join_room", (data) => {
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room); // Join the user to a socket room

    let __createdtime__ = Date.now(); // Current timestamp
    // Send message to all users currently in the room, apart from the user that just joined
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    });

    socket.emit("receive_message", {
      message: `Welcome ${username}`,
      username: CHAT_BOT,
      __createdtime__,
    });
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    let chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);
  });
});

server.listen(5174, () => {
  console.log("Server Running");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
