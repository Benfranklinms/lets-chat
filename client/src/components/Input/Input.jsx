import React from 'react'

const Input = ( { message, setmessage, sendMessage } ) => {
return (
    <div className="w-full flex items-center justify-center p-4 bg-gray-50 border-t border-gray-200">
        <form className="flex w-full max-w-2xl" onSubmit={sendMessage}>
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-400"
            />
            <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors font-semibold"
            >
                Send
            </button>
        </form>
    </div>
)
}

export default Input