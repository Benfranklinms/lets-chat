import express from 'express';
import { Server } from "socket.io";
import http from 'http';
import { createServer } from 'http';
import cors from 'cors';
import router from './routes/router.js';
import { error } from 'console';

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
    origin: 'http://localhost:5173', // Adjust this to your client URL
    methods: ['GET', 'POST'],
    credentials: true,
}));

io.on('connection', (socket) => {
    console.log("connected");

    socket.on('join', ({ name, room }) => {
        console.log(`${name} has joined the room: ${room}`);
    })

    socket.on("disconnect", () => {
        console.log("disconnected");
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})

