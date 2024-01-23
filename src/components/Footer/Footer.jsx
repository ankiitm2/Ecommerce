import React from "react";
import Logo from "../../Assets/logo.png";
import whatsapp from "../../Assets/whatsapp_icon.png";
import instagram from "../../Assets/instagram_icon.png"
import facebook from "../../Assets/facebook.webp"

const Footer = () => {
    return (
        <div className="Footer py-3">
            <div className="logo flex items-center gap-2 justify-center">
                <img src={Logo} alt="logo" className="w-14" />
                <p className="text-3xl font-bold">READIFY</p>
            </div>
            <ul className="content flex gap-4 justify-center mt-8 text-xl font-medium">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="icons flex items-center justify-center gap-3 pt-4 pb-5">
                <img src={whatsapp} alt="whatsapp" className="" />
                <img src={instagram} alt="instagram" className="" />
                <img src={facebook} alt="facebook" className="" />
            </div>
            <hr className="pt-1 w-10/12 m-auto bg-black" />
            <div className="copyright text-center pt-4">
                <p>Copyright © 2024 - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer