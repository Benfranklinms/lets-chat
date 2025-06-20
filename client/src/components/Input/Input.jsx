import React from 'react'

const Input = ( { message, setmessage, sendMessage } ) => {
return (
    <div className="w-full flex items-center justify-center p-4 bg-gray-100">
        <form className="flex w-full max-w-xl" onSubmit={sendMessage}>
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                onClick={(e) => sendMessage(e)}
                className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
            >
                Send
            </button>
        </form>
    </div>
)
}

export default Input