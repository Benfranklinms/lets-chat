import React from 'react'

const Message = ({ message: { text, user}, name }) => {
    let isSendByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    if(user === trimmedName) {
        isSendByCurrentUser = true;
    }

return (
    isSendByCurrentUser ? 
    (
        <div className="flex justify-end mb-2">
            <div className="flex flex-col items-end">
                <p className="text-xs text-gray-500 mb-1">{trimmedName}</p>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs break-words">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    ) : 
    (
        <div className="flex justify-start mb-2">
            <div className="flex flex-col items-start">
                <p className="text-xs text-gray-500 mb-1">{user}</p>
                <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg max-w-xs break-words">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
)
}

export default Message