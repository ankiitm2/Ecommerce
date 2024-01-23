import React from "react";
import star from "../../Assets/star_icon.png"
import stardull from "../../Assets/star_dull_icon.png"

const DescriptionBox = (props) => {
    const { product } = props;

    return (
        <div className="DescriptionBox mx-8 border-t-4">
            <div className="prod-desc pt-2">
                <h1 className="text-xl font-bold">Product Description </h1>
                <p className="text-sm pt-1 "> <span className="uppercase font-medium">{product.name}</span> light distressed touches add to the authentic vintage feel of this cool MADEWORN ROCK tee. Shopping online results in more sales and promotions with broader selections to choose from.</p>
            </div>
            <div className="prod-detail border-t-4 mt-4">
                <h1 className="text-xl font-bold pt-2">Product Details</h1>
                <div className="details pt-1">
                    <p className="capitalize pb-1 text-sm"><span className="font-bold">Department :</span> {product.category}</p>
                    <p className="capitalize pb-1 text-sm"><span className="font-bold">Date First Available :</span> Jan 07, 2023</p>
                    <p className="capitalize pb-1 text-sm"><span className="font-bold">Manufacturer :</span> MADEWORN ROCK</p>
                    <p className="capitalize text-sm flex gap-1"><span className="font-bold">Customer Reviews :</span> <div className="stars flex"><span className="pr-1 font-medium">4</span><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={stardull} alt="star" /></div></p>
                </div>
            </div>
        </div>
    )
}
export default DescriptionBox