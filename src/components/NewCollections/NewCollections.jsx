import React from "react";
import new_collections from "../../Assets/new_collections";
import Item from "../Item/Item";
import Carousel from "../Carousel/Carousel";

const NewCollections = () => {
    return (
        <div className="NewCollections justify-between mx-10 p-6 flex pb-14 gap-9 items-center">
            <Carousel>
                {new_collections.map((item, index) => (
                    <Item key={index} id={item.id} img={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                ))}
            </Carousel>
            <div className="tag">
                <p className="text-4xl font-medium new-collection">NEW ARRIVALS</p>
                <p className="text-2xl">The best things in life are free – like our shipping!</p>
            </div>

        </div>
    );
};

export default NewCollections;
