import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CarouselPage = () => {
    return (
        <Carousel>
    <div>
        <img src="https://placehold.co/100x100" />
        <p className="plant">Plant 1</p>
    </div>
    <div>
        <img src="https://placehold.co/100x100" />
        <p className="plant">Plant 2</p>
    </div>
    <div>
        <img src="https://placehold.co/100x100" />
        <p className="plant">Plant 3</p>
    </div>
    <div>
        <img src="https://placehold.co/100x100" />
        <p className="plant">Plant 4</p>
    </div>
    <div>
        <img src="https://placehold.co/100x100" />
        <p className="plant">Plant 5</p>
    </div>
</Carousel>
    );
};

export default CarouselPage;