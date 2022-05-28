import React from 'react';
import image from '../images/carpentar.webp'

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={image} alt='' className="w-full h-96" ></img>
                <div class="absolute flex justify-between transform -translate-y-1/2 translate-x-1/4 left-5 right-5 top-1/2">
                    <p className='text-center text-white font-medium text-2xl'>WELCOME TO OUR 100 YEAR OLD STORE.WE HAVE ALL THE THINGS YOU NEED</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
