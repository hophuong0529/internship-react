import {createContext, useState} from "react";

export const CartContext = createContext(null)
export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        console.log("product: ", product)
        setCartItems(cartItems.concat(product))
    }
    return (
        <CartContext.Provider value={{cartItems, setCartItems, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
