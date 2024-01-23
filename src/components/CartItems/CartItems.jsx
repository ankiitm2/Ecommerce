import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
import Remove from "../../Assets/delete.webp"

const CartItems = () => {
    const { allProduct, cartItems, removeFromCart, getTotalCartAmount } = useContext(HomeContext);

    return (
        <div className="CartItems flex mt-4">

            <div className="left-cont w-3/5 border-r-2">
                <div className="top-cont flex justify-between bg-gray-200 mx-2 p-2 mb-2 text-xs font-bold">
                    <p>ITEM(S)</p>
                    <p>TOTAL ${getTotalCartAmount()}</p>
                </div>

                <div className="main-col flex">
                    <div className="product mx-2">
                        <h1 className="mb-2 text-sm px-2 font-bold text-gray-400">PRODUCT</h1>
                        {allProduct.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return <div key={e.id}>
                                    <div className="cart-items flex bg-gray-200 mb-2 p-2 gap-2">
                                        <img src={e.image} alt={e.name} className="w-12 h-fit my-auto" />
                                        <div className="details">
                                            <p className="text-sm font-bold">{e.name}</p>
                                            <p className="text-xs">Size: M</p>
                                            <button className="flex items-center text-sm mt-1" onClick={() => { removeFromCart(e.id) }}><img src={Remove} alt="" className="w-5 h-fit" />Remove</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                    <div className="price">
                        <h1 className="mb-2 text-sm px-2 font-bold text-gray-400">PRICE</h1>
                        {allProduct.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return <div key={e.id}>
                                    <div className="cart-items flex bg-gray-200 mb-2 p-2 gap-2 text-sm font-bold">
                                        <p className="line-through decoration-2 text-gray-400">${e.old_price}</p>
                                        <p>${e.new_price}</p>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                </div>

                <div className="table">
                    <table className="w-full">
                        <tbody>
                            <tr class="cart-title2">
                                <th className="border-0">PRODUCT</th>
                                <th className="border-0">PRICE</th>
                                <th className="border-0">QUANTITY</th>
                            </tr>
                            <tr class="cart-prodict-list">

                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* {allProduct.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div key={e.id}>
                            <div className="cart-items">
                                <img src={e.image} alt={e.name} />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}</p>
                                <button onClick={() => { removeFromCart(e.id) }}><img src={Remove} alt="" /></button>
                            </div>
                        </div>
                    }
                })} */}
            </div>
            <div className="right-cont w-2/5">

            </div>


            <p>Total Amount: ${getTotalCartAmount()}</p>
        </div>
    )
}
export default CartItems