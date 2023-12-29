import React, { useContext } from 'react'
import { CartContext } from '../store/cart-context'

const Cart = () => {
    
    const {updateCartQuantity,items} = useContext(CartContext);

    const totalPrice = items.reduce((acc,item)=>acc + item.price*item.quantity,0) ;

    const formattedPrice = `₹${totalPrice.toFixed(2)}`;

  return (
      <div id='cart'>
            {items.length === 0 && <p id='cart__empty'>No items in the cart -- ADD ITEMS </p>}
            {items.length > 0 && (
             <ul id='cart-items'>
                 { items.map((item)=>{
                    const Productprice=`₹${item.price}`
                     return (
                        <li >
                        <div id='cart__product-info'>
                            <span  className='cart_info'>{item.title}</span>
                            <span className='cart_info'>{Productprice}</span>
                        </div> 
                        <div id='cart-actions'>
                            <button onClick={()=>updateCartQuantity(item.id ,1)}>+</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>updateCartQuantity(item.id,-1)}>-</button>
                        </div>
                    </li>
                     )
                 })} 
                
        </ul>
)}
        <p id='cart-totalPrice'>
             Total : <strong>{formattedPrice}</strong>
        </p>
    </div>
  )
}

export default Cart
