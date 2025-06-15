import express from 'express';
import { Server } from "socket.io";
import http from 'http';
import { createServer } from 'http';
import router from './routes/router.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

io.on('connection', (socket) => {
    console.log("connected");

    socket.on("disconnect", () => {
        console.log("disconnected");
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})

