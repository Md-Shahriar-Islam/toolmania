import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Authentication/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://limitless-island-64080.herokuapp.com/reviews').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>

    }
    console.log(data)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {data.map(d => <ReviewCard key={d._id} review={d}></ReviewCard>)}
        </div>
    );
};

export default Reviews;