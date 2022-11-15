import React, { useReducer } from 'react';
import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';

interface Props {
    children?: React.ReactNode;
}
export interface CartState {
    cart: ICartProduct[];
}

const CART_INITIAL_STATE: CartState = {
    cart: [],
}

export const CartProvider:React.FC<Props> = ({ children }) => {

 const [state, dispatch] = useReducer( cartReducer, CART_INITIAL_STATE );

 const addProductToCart = ( product: ICartProduct ) => {
  //! Level 1
  // dispatch({ type: '[Cart] - Add Product', payload: product });

  //! Level 2
  // const productsInCart = state.cart.filter( p => p._id !== product._id && p.size !== product.size );
  // dispatch({ type: '[Cart] - Add Product', payload: [...productsInCart, product] });

  //! Level 3
 }

 return (
   <CartContext.Provider value={{
       ...state,

       // Methods
       addProductToCart,
   }}>
     { children }
   </CartContext.Provider>
 )
}