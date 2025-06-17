import React from 'react'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";


let socket;

const Chat = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  const ENDPOINT = "http://localhost:3000";
  const location = useLocation();
  useEffect(() => {
    const { name, room }= queryString.parse(location.search);

    socket = io(ENDPOINT);

    setname(name);
    setroom(room);
    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search]);
  
  return (
   <h1>Chat</h1>
  )
}

export default Chat