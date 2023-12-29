import React from 'react'


const Cart = () => {
  return (
    <div id='cart'>
        <ul id='cart-items'>
            <li >
                <div id='cart__product-info'>
                    <span>product title</span>
                    <span>price 45</span>
                </div> 
                <div id='cart-actions'>
                    <button>+</button>
                    <button>-</button>

                </div>
            </li>
        </ul>
        <p id='cart-totalPrice'>
            cart Total : <strong>₹265</strong>
        </p>
    </div>
  )
}

export default Cart
