import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Join from './components/Join/Join.jsx'
import Chat from './components/Chat/Chat.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Join/>}></Route>
        <Route path = "/chat" element = {<Chat/>}></Route>
      </Routes>
    </div>
  )
}

export default App