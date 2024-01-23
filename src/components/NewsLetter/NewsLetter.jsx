import React from "react";

const NewsLetter = () => {
    return (
        <div className="NewsLetter p-9 flex items-center">
            <div className="col-1 w-4/12">
                <h1 className="text-7xl">Stay in <br /> the Know</h1>
            </div>
            <div className="newsBox">
                <p className="text-5xl mb-4">Join our mailing list</p>
                <p className="text-xl">Email*</p>
                <div className="input-box flex gap-2">
                    <input type="email" placeholder="enter your email" className="p-1 border-2 border-orange-500 rounded w-75" />
                    <button className="btn bg-orange-600 text-white hover:bg-orange-500">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter