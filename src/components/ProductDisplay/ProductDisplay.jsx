import React, { useEffect, useState } from "react";
import star from "../../Assets/star_icon.png"
import stardull from "../../Assets/star_dull_icon.png"
import instagram from "../../Assets/instagram_icon.png"
import Whatsapp from "../../Assets/whatsapp_icon.png"
import facebook from "../../Assets/facebook.webp"
import scissor from "../../Assets/scissor.png"
import Return from "../../Assets/return.png"
import Tshirt from "../../Assets/t-shirt.png"
import Money from "../../Assets/money.png"


const ProductDisplay = (props) => {
    const { product } = props;
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isLensVisible, setLensVisible] = useState(false);

    function imageZoom(imgId, lensId, event) {
        let img = document.getElementById(imgId);
        let lens = document.getElementById(lensId);

        if (lens) {
            if (isLensVisible) {
                lens.style.transition = "left 0.2s ease, top 0.2s ease";
                lens.style.left = event.clientX - lens.offsetWidth + "px";
                lens.style.top = event.clientY - lens.offsetHeight / 50 + "px";
            } else {
                lens.style.transition = "none";
            }
        }

        if (img && lens && isLensVisible) {
            let ratio = 3;

            let rect = img.getBoundingClientRect();
            let offsetX = event.clientX - rect.left;
            let offsetY = event.clientY - rect.top;

            offsetX = Math.max(0, Math.min(offsetX, img.width));
            offsetY = Math.max(0, Math.min(offsetY, img.height));

            let posX = offsetX - lens.offsetWidth / 4;
            let posY = offsetY - lens.offsetHeight / 4;

            lens.style.backgroundImage = `url(${img.src})`;

            lens.style.backgroundSize = `${img.width * ratio}px ${img.height * ratio}px`;

            lens.style.backgroundPosition = `-${posX * ratio}px -${posY * ratio}px`;
        }
    }

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });

        const img = document.getElementById("featured");
        const lens = document.getElementById("lens");

        if (img && lens) {

            const rect = img.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;


            const isCursorInsideImage =
                offsetX >= 0 && offsetX <= img.width && offsetY >= 0 && offsetY <= img.height;
            if (isCursorInsideImage) {
                setLensVisible(true);
                imageZoom("featured", "lens", event);
            } else {
                const isCursorToLeftOfImage = offsetX < 0;
                setLensVisible(false);
                lens.style.transition = "none";
            }
        }
    };



    useEffect(() => {
        const featuredImg = document.getElementById("featured");

        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        if (featuredImg) {
            featuredImg.addEventListener("mousemove", handleMouseMove);

            return () => {
                featuredImg.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, [cursorPosition]);


    return (
        <div className="ProductDisplay flex m-auto gap-6 mx-3 mb-5">

            <div className="imgWrapper flex w-2/4">
                <div className="left-container w-1/5 flex flex-col gap-3">

                    <img src={product.image} alt="" className="w-4/5" />
                    <img src={product.image} alt="" className="w-4/5" />
                    <img src={product.image} alt="" className="w-4/5" />
                    <img src={product.image} alt="" className="w-4/5" />

                </div>
                <div className="right-container w-4/5 pr-10" onMouseMove={handleMouseMove}>
                    <div id="lens" className={`w-80 h-80 border-2 border-black absolute ${isLensVisible ? '' : 'hidden'}`}></div>
                    <img id="featured" src={product.image} alt="" className="w-full" />
                </div>
            </div>
            <div className="content w-2/4">
                <h1 className="uppercase text-xl font-medium">{product.name}</h1>
                <div className="stars flex mt-2">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={stardull} alt="" />
                </div>
                <div className="details flex mt-5 gap-2 font-bold text-xl items-end">
                    <p className="line-through decoration-2 text-red-600">${product.old_price}</p>
                    <p>${product.new_price}</p>
                    <p className="text-base text-green-600">inclusive of all taxes</p>
                </div>
                <div className="size mt-3">
                    <h1 className="font-medium">Select Size</h1>
                    <div className="button flex gap-2 mt-2">
                        <button
                            type="button"
                            className="btn outline outline-1 outline-gray-400 rounded-0 w-12 hover:bg-orange-400">
                            XS
                        </button>
                        <button
                            type="button"
                            className="btn outline outline-1 outline-gray-400 rounded-0 w-12 hover:bg-orange-400">
                            S
                        </button>
                        <button
                            className="btn outline outline-1 outline-gray-400 rounded-0 w-12 hover:bg-orange-400"
                        >
                            M
                        </button>
                        <button
                            className="btn outline outline-1 outline-gray-400 rounded-0 w-12 hover:bg-orange-400"
                        >
                            L
                        </button>
                        <button
                            className="btn outline outline-1 outline-gray-400 rounded-0 w-12 hover:bg-orange-400"
                        >
                            XL
                        </button>
                    </div>

                    <div className="cart mt-7 mb-2">
                        <button className="btn py-3 bg-orange-600 rounded-0 text-white w-96 hover:bg-orange-700">ADD TO CART</button>
                    </div>

                    <div className="social-icons gap-2 mt-4 flex mt-3">
                        <img src={instagram} alt="" />
                        <img src={Whatsapp} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                    <div className="sub-details mt-2">
                        <p className="font-medium text-orange-600">CHECK PINCODE FOR DELIVERY</p>
                        <div className="pinCode mt-1.5 flex gap-2">
                            <input type="text" placeholder="Enter your Pincode" className="outline outline-2 outline-gray-400 p-2 text-sm" />
                            <button className="btn bg-orange-600 rounded-0 text-white hover:bg-orange-700">Check</button>
                        </div>
                        <div className="shopping flex mt-4 flex-col gap-2">
                            <div className="box flex gap-1 items-center">
                                <img src={scissor} alt="scissor" className="w-4 h-fit" /><p>Free Alterations at Store</p>
                            </div>
                            <div className="box flex gap-1 items-center">
                                <img src={Return} alt="return logo" className="w-5 h-fit" /><p> 15 days return policy</p>
                            </div>
                            <div className="box flex gap-1 items-center">
                                <img src={Tshirt} alt="Tshirt" className="w-5 h-fit" /><p> New styles every week</p>
                            </div>
                            <div className="box flex gap-1 items-center">
                                <img src={Money} alt="money" className="w-7 h-fit" /><p>Easy checkout with multiple payment options</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDisplay