import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
import Remove from "../../Assets/delete.webp"
import arrow from "../../Assets/breadcrum_arrow.png";
import cupon from "../../Assets/coupon.svg"

const CartItems = () => {
    const { allProduct, cartItems, removeFromCart, getTotalCartAmount } = useContext(HomeContext);

    return (
        <div className="CartItems mt-4 mx-6">
            <div className="top-cont py-2 mb-2 text-3xl">
                <p>Your Cart</p>
            </div>
            <div className="shoppingDetails flex gap-3">
                <div className="left-cont w-3/5 ">
                    <div className="main-col flex">
                        <div className="product w-full">
                            <h1 className="font-bold text-sm mx-2 mb-1">ITEM(S)</h1>
                            {allProduct.map((e) => {
                                if (cartItems[e.id] > 0) {
                                    return <div key={e.id}>
                                        <div className="cart-items flex outline outline-1 outline-gray-300 mb-3 p-3 gap-3">
                                            <img src={e.image} alt={e.name} className="w-20 h-fit my-auto" />
                                            <div className="details flex justify-between w-full">
                                                <div className="name-detail flex flex-col justify-between">
                                                    <div className="content">
                                                        <p className="text-base font-medium">{e.name}</p>
                                                        <p className="text-xs">Size: M</p>
                                                    </div>
                                                    <button className="flex items-center text-sm mt-1" onClick={() => { removeFromCart(e.id) }}><img src={Remove} alt="" className="w-5 h-fit" />Remove</button>
                                                </div>
                                                <div className="quantity">
                                                    <p className="text-sm font-medium">Qty: <span>{cartItems[e.id]}</span></p>
                                                </div>
                                                <div className="price flex flex-col justify-between items-end text-sm">
                                                    <p>${e.new_price}</p>
                                                    <p><span className="font-bold">Total Price:</span> ${e.new_price * cartItems[e.id]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
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
                    <h1 className="font-bold text-sm mx-2 mb-1">ORDER SUMMARY</h1>
                    <div className="total outline outline-1 outline-gray-300">
                        <div className="box-1 px-3 py-2">
                            <p className="flex justify-between text-sm font-bold text-gray-500">Sub Total <span>${getTotalCartAmount()}</span></p>
                        </div>
                        <div className="box-2 px-3 py-2">
                            <p className="flex justify-between text-sm font-bold text-gray-500">Shipping Charge <span>$0.00</span></p>
                        </div>
                        <div className="total-charge px-3 py-2 ">
                            <p className="flex justify-between border-t pt-1 font-bold text-sm">TOTAL <span>${getTotalCartAmount()}</span></p>
                        </div>
                    </div>
                    <div className="promCode outline mt-3 px-3 py-2 outline-1 outline-gray-300">
                        <div className="flex justify-between items-center text-xs"><p className="gap-2 flex"><img src={cupon} alt="cuppon" /> Apply Promo Code</p> <img src={arrow} alt="arrow" className="w-3 h-fit" /> </div>
                    </div>
                    <button className="mt-3 px-3 py-2 bg-orange-600 w-full text-white font-bold">Proceed to Checkout</button>
                </div>
            </div>

        </div>
    )
}
export default CartItems