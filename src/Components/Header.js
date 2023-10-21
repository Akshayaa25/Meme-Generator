import React from 'react'
import logo from '../Images/troll-face.png'

function Header() {
  return (
      <header>
        <div className='logo'>
            <img src={logo} alt='Logo' />
            <h2>Meme Generator</h2>
        </div>
        <h4>React Project</h4>
      </header>
  )
}

export default Header;