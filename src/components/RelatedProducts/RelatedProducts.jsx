import React from "react";
import dataProduct from "../../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
    return (
        <div className="RelatedProducts mt-4 mx-8">
            <h1 className="text-center text-xl font-medium pb-2">You may also like</h1>
            <div className="cards flex flex-wrap gap-3 justify-center">
                {dataProduct.map((item, index) => {
                    return <Item key={index} id={item.id} img={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}
export default RelatedProducts