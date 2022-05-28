import React from 'react';

const ReviewCard = (props) => {
    const { name, review, rating } = props.review
    return (
        <div className="mt-5">
            <div class="card w-96  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className="text-justify">{review}</p>
                    <p>ratings:{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;