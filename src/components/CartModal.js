import React  from 'react'
import Cart from './Cart';
import { createPortal } from 'react-dom'

const CartModal = ({onClose}) => {
    const handleClose=()=>{
        console.log('closing the modal');
        onClose();
    }
  return createPortal (
    <>
    <div id='modal-backdrop'></div>
    <div  id='cart-modal'> 
          <h2>title</h2>
          <Cart />
     <button  onClick={handleClose} >close</button>
    </div> 
    </> ,
   document.getElementById('modal')
   ) ;
}

export default CartModal
