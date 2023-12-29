import { createContext, useState } from "react";
import { product_data } from "../product-data";


export const CartContext=createContext({
   items:[] ,
   addToCart:()=>{},
   updateCartQuantity:()=>{}
});

export default function CartContextProvider({children}){

    const[shoppingCart,setShoppingCart]=useState({
        items:[]
    }) ;

    const handleaddToCart=(id)=>{

      setShoppingCart((prevShoppingCart)=>{
         const updatedItems = [...prevShoppingCart.items];

         const existingCartIndex = updatedItems.findIndex((currItem)=>currItem.id===id);

         const existingCartItem=updatedItems[existingCartIndex];

         if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                quantity:existingCartItem.quantity + 1 
            };
            updatedItems[existingCartIndex]=updatedItem;
        }else {
                const product = product_data.find((product)=>product.id === id);
                updatedItems.push({
                    id:id,
                    title:product.title,
                    price:product.price ,
                    quantity: 1
                })
        }
        return {
            items:updatedItems,
        }
    })

    }

    const handleupdateCartQuantity=(id,amount)=>{
        setShoppingCart((prevShoppingCart)=>{
            const updatedItems=[...prevShoppingCart.items];
            const updatedItemIndex=updatedItems.findIndex((item)=>item.id===id);

            const updatedItem = updatedItems[updatedItemIndex];

            updatedItem.quantity += amount ;
            if(updatedItem.quantity<=0){
                updatedItems.splice(updatedItemIndex,1);
            }else {
                updatedItems[updatedItemIndex]=updatedItem ;
             }
               return {
                items:updatedItems
               }

        }
        )
    }

    const cartCtx ={
        items:shoppingCart.items,
        addToCart: handleaddToCart,
        updateCartQuantity: handleupdateCartQuantity ,

    } ;


    return (
    <CartContext.Provider value={cartCtx}>
         {children}
    </CartContext.Provider>
)
}