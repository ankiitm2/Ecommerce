import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <Link to={`/product/${props.id}`}>
            <div className="Item w-96">
                <img onClick={window.scrollTo(0, 0)} src={props.img} alt={props.name} className="w-full" />
                <div className="details">
                    <p>{props.name}</p>
                    <div className="sub-detail flex gap-3">
                        <p className="line-through text-red-600">${props.old_price}</p>
                        <p>${props.new_price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item