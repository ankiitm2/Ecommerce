import React from "react";
import Data from '../../Assets/data';
import Item from "../Item/Item";

const Popular = () => {
    return (
        <div className="Popular w-fit block m-auto p-6">
            <p className="title text-4xl mb-5 font-bold">Popular in Women</p>
            <div className="cards flex gap-8 flex-wrap justify-center">
                {Data.map((data, i) => (
                    <Item key={i} id={data.id} img={data.image} name={data.name} old_price={data.old_price} new_price={data.new_price} />
                ))}
            </div>
        </div>
    )
}
export default Popular