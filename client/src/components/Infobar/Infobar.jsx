import React from 'react'
import { AlignHorizontalDistributeCenter } from 'lucide-react'
import closeIcon from '../../assets/closeIcon.png'

const Infobar = ( {room} ) => {
  return (
    <div className="flex justify-between items-center border-b-1 rounded-t h-16 px-5 border-gray-200">
      <div className="flex items-center">
         <AlignHorizontalDistributeCenter className='m-2'/>
        <h3 className="text-black m-0 font-bold">{room}</h3>
      </div>
      <a href="/" className="flex items-center">
        <img src={closeIcon} alt="" className="w-5" />
      </a>
    </div>
  )
}

export default Infobar