import React from 'react'
import imgHeder from '../assets/download.jpeg';
const Header = () => {
  return (
    <div id='main-header'>
        <img src={imgHeder} alt='header img' />
        <h1>Shopping List</h1>
         <button id='cart-btn'>cart (0)</button>
      
    </div>
  )
}

export default Header
