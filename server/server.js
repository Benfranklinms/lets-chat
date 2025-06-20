import express from 'express';
import { Server } from "socket.io";
import { createServer } from 'http';
import cors from 'cors';
import router from './routes/router.js';
import { error } from 'console';
import { addUser, removeUser, getUser, getUsersInRoom } from './utils/users.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
}));

io.on('connection', (socket) => {
    console.log("connected");

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) {
            return callback(error);
        }
        socket.join(user.room);
        socket.emit("message", { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit("message", { user: 'admin', text: `${user.name} has joined!` });
        io.to(user.room).emit("roomdata", {
            room: user.room,
            users: getUsersInRoom(user.room)
        })
        callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);
        if (user) {
            io.to(user.room).emit("message", { user: user.name, text: message });
            io.to(user.room).emit("roomdata", {
                room: user.room,
                text: message
            });
        }

        callback();
    });

    socket.on("disconnect", () => {
       const user = removeUser(socket.id);
       if (user) {
            io.to(user.room).emit("message", { user: 'admin', text: `${user.name} has left`});
       }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})

