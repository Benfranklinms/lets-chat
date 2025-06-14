import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Join from './components/join.jsx'
import Chat from './components/chat.jsx'

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