import React, { useState } from 'react'
import Comment from '../assets/Vector (4).png'
import Vector from '../assets/Union.png'
import Account from '../assets/icon_account_inv.svg'

const Header = () => {
    const [showIcons, setShowIcons] = useState(false); 

    const toggleIcons = () => {
        setShowIcons(!showIcons);
      };
  return (
    <header>
        <div className="header-container">
      <div className="hamburger my-5" onClick={toggleIcons}>
        <div>
        <img src={Vector} alt='img'/>
        </div>
        {showIcons && (
          <div className="icon-container">
            <img className='header-icon my-4' src={Comment} alt="comment" />
            <img className='header-icon' src={Account} alt="Account" />
          </div>
        )}
      </div>
      </div>
    </header>
  )
}

export default Header
