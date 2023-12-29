import React, { useState } from 'react'
import imgHeder from '../assets/download.jpeg';
import CartModal from './CartModal';
const Header = () => {
    
    const[isModalOpen,setIsModalOpen]=useState(false);
  
     const handleClickCart=()=>{
        console.log('click cart open ');
         setIsModalOpen(true);
     }
     const closeModal =()=>{
        setIsModalOpen(false);
     }
    

  return (
    <>
    { isModalOpen && <CartModal onClose={closeModal} /> }
    <div id='main-header'>
        <img src={imgHeder} alt='header img' />
        <h1>Shopping List</h1>
         <button id='cart-btn' onClick={handleClickCart}>cart (0)</button>
      
    </div>
    </>
  )
}

export default Header
