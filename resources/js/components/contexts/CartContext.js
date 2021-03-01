import {createContext, useState} from "react";

export const CartContext = createContext(null)
export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [totalCart, setTotalCart] = useState(0)

    const addToCart = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x
                )
            )
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }

    const removeToCart = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist.quantity === 1) {
            removeItem(product)
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x
                )
            )
        }
    }

    const removeItem = (product) => {
        setCartItems(
            cartItems.filter((x) => x.id !== product.id))
    }
    return (
        <CartContext.Provider value={{totalCart, setTotalCart, cartItems, setCartItems, addToCart, removeToCart, removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}
