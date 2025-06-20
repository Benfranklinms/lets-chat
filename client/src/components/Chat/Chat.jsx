import React from 'react'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";
import Infobar from '../Infobar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';


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
    socket.emit('join', { name, room }, (error) => {
       if(error) {
        alert(error);
      }
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg flex flex-col" style={{ minHeight: '80vh', height: '80vh' }}>
        <Infobar room={room} />
        <div className="flex-1 overflow-y-auto p-4">
          <Messages messages={messages} name={name} />
        </div>
        <div className="p-4 border-t-2 border-gray-200">
          <Input message={message} setmessage={setmessage} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  )
}

export default Chat