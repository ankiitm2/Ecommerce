import React, { useState, useEffect } from "react";

const Carousel = ({ children, cardsPerSlide = 3 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % Math.ceil(children.length / cardsPerSlide));
        }, 5000); // Change the interval duration as needed

        return () => clearInterval(interval);
    }, [children, cardsPerSlide]);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + Math.ceil(children.length / cardsPerSlide)) % Math.ceil(children.length / cardsPerSlide));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Math.ceil(children.length / cardsPerSlide));
    };

    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {Array.from({ length: Math.ceil(children.length / cardsPerSlide) }).map((_, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <div className="d-flex justify-content-between gap-3">
                            {children.slice(index * cardsPerSlide, (index + 1) * cardsPerSlide)}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev bg-gray-800 w-fit h-fit m-auto rounded-full p-1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" onClick={handlePrev}>
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next bg-gray-800 w-fit h-fit m-auto rounded-full p-1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
