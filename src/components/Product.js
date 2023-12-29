import React, { useContext } from 'react' ;
import { CartContext } from '../store/cart-context';
const Product = ({data}) => {
  const {addToCart} = useContext(CartContext);
  return (
    
    <div id='product'>
        <img src={data.img} alt='img'/> 
        <div id='product__info'>
            <p id='product__info--title'>{data.title}</p>
            <p id='product__info--price'>₹{data.price}</p>
            <p id='product__info--description'>{data.description}</p>
        </div>
          <div>
            <button  onClick={()=>addToCart(data.id)} id='add-to-cart-btn'>Add to cart</button>
          </div>
           </div>
  )
}

export default Product
