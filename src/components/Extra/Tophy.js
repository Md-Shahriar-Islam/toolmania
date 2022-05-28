import React from 'react';
import trophy from "../images/trophy.webp"

const Tophy = () => {
    return (
        <div className="mt-5">

            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-96 w-96" src={trophy} alt="Album"></img></figure>
                <div class="card-body  text-justify">
                    <h2 class="card-title text-5xl pt-7">BE THE PART OF GLORY WITH US </h2>
                    <p>for the last 50 years we are becoming the number one brand in the whole world.We are also becoming the Best seller every year.Why you should join us?You will get every necassary things you want for your day to day task and also for your professional work.No we are inviting you to join this great journey with us and become a glad member of our family</p>

                </div>
            </div>

        </div>
    );
};

export default Tophy;