import React from "react";
import Offer1 from '../../Assets/offer1.png';
import Offer2 from '../../Assets/offer2.png';
import Arrow from '../../Assets/arrow.png';

const Offers = () => {
    return (
        <div className="Offers flex m-6 mx-24 justify-between items-center">
            <div className="left-col">
                <p className="tag-line text-4xl font-medium">EXCLUSIVE offers for you</p>
                <p className="text-xl font-medium">Come meet the new you!!!</p>
                <button className="text-sm outline outline-2 p-2 mt-3 rounded-full block gap-1 items-center w-28 hover:flex hover:bg-black hover:text-white hover:outline-0 transition-all duration-500 ease-in-out">Shop Now <img src={Arrow} className="transition-all duration-700 ease-in-out" alt="arrow" /></button>
            </div>
            <div className="right-col flex flex-wrap justify-end">
                <img src={Offer1} alt="offer-banner" />
                <img src={Offer2} alt="offer-banner" />
            </div>
        </div>
    )
}
export default Offers