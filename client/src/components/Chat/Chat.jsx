import React from 'react'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";
import Infobar from '../Infobar/Infobar';


let socket;

const Chat = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState([]);
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

  useEffect(() => {
    socket.on('message', (message) => {
      setmessages([...messages, message]);
    });
  }, [messages])


  const sendMessage = (e) => {
    e.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, () => {
        setmessage("");
      });
    }
  }

  console.log(message, messages);
  
  
  return (
    <div>
      <div>
        <Infobar room = {room} />
        {/* <input type="text"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
        /> */}
      </div>
      hello
    </div>
  )
}

export default Chat