import React from 'react';
import { IoIosPeople, IoFlagSharp } from 'react-icons/io';
import { MdReviews } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';
import { GiElectricalSocket } from 'react-icons/gi';



const Business = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl text-center uppercase text-emerald-400">Millions Business Trust Us</h1>
                <h1 className="text-2xl mt-4 text-center ">TRY TO UNDERSTAND USER EXPERIENCE</h1>
            </div>
            <div>
                <div className='grid lg:grid-cols-4 pl-16 mt-16'>
                    <div className='w-40'>
                        <IoIosPeople className='w-40 text-8xl '></IoIosPeople>
                        <p className='text-2xl text-center '> we served 100+ customers</p>
                    </div>
                    <div className='w-40'>
                        <GrMoney className='w-40 text-9xl '></GrMoney>
                        <p className='text-2xl text-center'> 120M+ Annual revenue</p>
                    </div>
                    <div className='w-40'>
                        <MdReviews className='w-40 text-9xl'></MdReviews>
                        <p className='text-2xl'> 33K+ Reviews</p>
                    </div>
                    <div className='w-40'>
                        <GiElectricalSocket className='w-40 text-9xl '></GiElectricalSocket>
                        <p className='text-2xl p-4'> 50+ tools</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Business;