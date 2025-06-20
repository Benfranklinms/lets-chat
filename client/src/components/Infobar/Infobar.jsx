import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const Infobar = () => {
  return (
    <div>
        <div>
            <img src = {onlineIcon} alt="User" />
            <h3>Room Name</h3>
        </div>
            <a href="/">
                <img src = {closeIcon} alt=""/>
            </a>
        <div>

        </div>
    </div>
  )
}

export default Infobar