import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Join = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white p-12 rounded shadow-md w-80'>
        <h1 className='text-xl mb-4 text-bold'>Join a room</h1>
        <div className='mb-4 ring ring-gray-300 rounded'>
          <input type="text" placeholder="Name" className='p-2 outline-none w-full' onChange={(event) => setname(event.target.value)}/>
        </div>
        <div className='mb-4 ring ring-gray-300 rounded'>
          <input type="text" placeholder="Room" className='p-2 outline-none w-full' onChange={(event) => setroom(event.target.value)}/>
        </div>
        <div className='flex justify-start'>
          <Link onClick = {event => (!name || !room)? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className='bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2 rounded' type='submit'>
            Join
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join