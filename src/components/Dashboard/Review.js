import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, errors } = useForm();
    if (errors) {
        console.log(errors)
    }
    const onSubmit = data => {
        data = { ...data, name: user.displayName, email: user.email }
        console.log(data)
        fetch('https://limitless-island-64080.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })


    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                <input type="text-area" placeholder="your review" className=" input input-bordered w-full max-w-xs" {...register("review")} /><br></br>
                <input type="number" placeholder="your rating " className=" input input-bordered w-full max-w-xs" {...register("rating", { min: 1, max: 5 })} /><br></br>
                <input className="btn btn-wide" type="submit" />
            </form>
        </div>
    );
};

export default Review;