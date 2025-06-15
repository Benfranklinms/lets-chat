import express from 'express';
import { Server } from "socket.io";
import http from 'http';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const io = new Server(server);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})

