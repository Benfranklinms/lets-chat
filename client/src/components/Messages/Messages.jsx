import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message';

const Messages = ({ messages, name }) => {
  return (
    <div>
        <ScrollToBottom>
            {messages.map((messages, index) => {
                <div key = {index}> <Message message = {messages} name = {name} /> </div>
            })}
        </ScrollToBottom>
    </div>
  )
}

export default Messages