import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import Cart from "../Assets/cart_icon.png"

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="Navbar flex justify-around p-4 shadow bg-black">
            <Link to={"/"}>
                <div className="logo flex items-center gap-3">
                    <img src={Logo} alt="logo" className="w-10" />
                    <h1 className="text-2xl font-bold text-white">READYIFY</h1>
                </div>
            </Link>
            <ul className="content flex items-center gap-5 font-medium text-xl text-gray-400 cursor-pointer">
                <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>
                    <Link to={"/"}>Home</Link>
                    {menu === "home" ? <hr className="h-1 rounded-xl bg-red-600" /> : <></>}
                </li>
                <li className={menu === "men" ? "active" : ""} onClick={() => setMenu("men")}>
                    <Link to={"/men"}>Men</Link>
                    {menu === "men" ? <hr className="h-1 rounded-xl bg-red-600" /> : <></>}
                </li>
                <li className={menu === "women" ? "active" : ""} onClick={() => setMenu("women")}>
                    <Link to={"/women"}>Women</Link>
                    {menu === "women" ? <hr className="h-1 rounded-xl bg-red-600" /> : <></>}
                </li>
                <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}>
                    <Link to={"/kids"}>Kids</Link>
                    {menu === "kids" ? <hr className="h-1 rounded-xl bg-red-600" /> : <></>}
                </li>
            </ul>
            <div className="btn flex items-center gap-4">
                <button className="rounded-full p-2 border-2 border-white w-28 text-white cursor-pointer shadow font-bold active:text-black active:bg-white active:border-gray-800"><Link to={"/loginSignup"}>Login</Link></button>
                <Link to={"/cart"}> <img src={Cart} alt="cart" className="invert w-4/5" /></Link>
                <div className="cart-count relative w-5 h-5 flex justify-center items-center text-sm bg-red-600 text-white rounded-xl">0</div>
            </div>
        </div >
    )
}
export default Navbar