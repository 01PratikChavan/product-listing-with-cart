import React from 'react'
import Product from './Product'
import { product_data
 } from '../product-data'
const ProducetList = () => {
  return (
    <div id='shoppingList'>
       <p id='shoppingList--heading'>
     These are the our best product you can see and purchase.
    </p>
    <div id='product-list'>
        {
        product_data.map((data)=> 
            <Product key={data.id} data={data} />
        )
 }
    </div>
      
    </div>
  )
}

export default ProducetList
