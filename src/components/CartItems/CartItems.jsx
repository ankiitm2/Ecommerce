import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
import Remove from "../../Assets/cart_cross_icon.png"

const CartItems = () => {
    const { allProduct, cartItems, removeFromCart } = useContext(HomeContext);

    return (
        <div className="CartItems">
            {allProduct.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="cart-items">
                            <img src={e.image} alt={e.name} />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button onClick={() => { removeFromCart() }}><img src={Remove} alt="" /></button>
                        </div>
                    </div>
                }
            })}
        </div>
    )
}
export default CartItems