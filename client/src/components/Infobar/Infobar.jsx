import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const Infobar = ( {room} ) => {
  return (
    <div className="flex justify-between items-center bg-blue-600 rounded-t h-16 px-5">
      <div className="flex items-center">
        <img src={onlineIcon} alt="User" className="mr-2.5 w-5" />
        <h3 className="text-white m-0">{room}</h3>
      </div>
      <a href="/" className="flex items-center">
        <img src={closeIcon} alt="" className="w-5" />
      </a>
    </div>
  )
}

export default Infobar