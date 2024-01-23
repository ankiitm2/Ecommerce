import React from "react";
import Banner from '../../Assets/hero-banner.png'

const Hero = () => {
    return (
        <div className="Hero">
            <div className="left-col relative flex items-center justify-center">
                <div className="content absolute z-10 text-white m-12">
                    <p className="date text-2xl font-medium">01 Nov - 30 Nov</p>
                    <p className="tag font-medium"><span className="italic">#</span> FASHION DAY</p>
                    <p className="text-2xl font-light sub-tag leading-3">Discover fashion that suits to your style</p>
                </div>
                <img src={Banner} alt="" className="w-full object-cover relative" />
            </div>
        </div>
    )
}
export default Hero