import React, { createContext, useState } from "react";
import allProduct from "../../Assets/all_product"

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProduct.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}

const HomeContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const ContextValue = { allProduct, cartItems, addToCart, removeFromCart }

    return (
        <HomeContext.Provider value={ContextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider