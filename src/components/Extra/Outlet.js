import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import location from "../images/location2.jpg"

const Outlet = () => {
    return (
        <div className=" mt-6 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex justify-center">
                <HiLocationMarker className='w-40 text-9xl'></HiLocationMarker>

            </div>
            <div className=" grid grid-cols-5">
                <div>
                    <img alt="" src={location}></img>

                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-5xl">Where are we??</h1>
                    <p>Many of you people still prefer offline shop.To help them you can can find us at this places you can see them on the left side screen</p>
                </div>
            </div>
        </div>
    );
};

export default Outlet;