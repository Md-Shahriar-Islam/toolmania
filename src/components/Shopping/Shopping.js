import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Authentication/Loading';
import Tool from '../Home/Tool';

const Shopping = () => {

    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [tool, setTool] = useState({})

    useEffect(() => {
        fetch(`https://limitless-island-64080.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    const { register, handleSubmit, reset, setValue } = useForm();
    let { name, image, quantity, minimumOrder, price, description } = tool


    const onSubmit = data => {
        console.log(data)
        console.log(data.orderQunatity)
        console.log(minimumOrder)


        if (parseInt(data.orderQunatity) < parseInt(minimumOrder)) {
            toast.error('You Can not order less then minimum quantity')
        }
        else if (parseInt(data.orderQunatity) > parseInt(quantity)) {
            toast.error('You can not order more than available quantity')
        }
        else {


            fetch('https://limitless-island-64080.herokuapp.com/orders', {
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



    };

    console.log(tool)
    return (
        <div>
            <div class="flex w-full">
                <div class="grid  flex-grow card  rounded-box place-items-center">
                    <div class="card w-96 bg-base-100 my-6 shadow-xl image-full lg:mx-auto">
                        <figure><img className="h-80" src={image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{name}</h2>
                            <p>Quantiy:{quantity}</p>
                            <p>minimumOrder:{minimumOrder}</p>
                            <p>Price:{price}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div class="divider divider-horizontal"></div>
                <div class="grid  flex-grow card  rounded-box place-items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                        <input type="email" value={user?.email} placeholder="your email" className=" input input-bordered w-full max-w-xs" {...register("email")} /><br></br>
                        <input type="text" value={user?.displayName} placeholder="your name " className=" input input-bordered w-full max-w-xs" {...register("name")} /><br></br>
                        <input type="text" value={name} placeholder="product name " className=" input input-bordered w-full max-w-xs" {...register("productname")} /><br></br>
                        <input type="text" placeholder="your address " className=" input input-bordered w-full max-w-xs" {...register("address")} /><br></br>
                        <input type="number" placeholder="your phone number " className=" input input-bordered w-full max-w-xs" {...register("phonenumber")} /><br></br>
                        <input type="number" defaultValue={minimumOrder} placeholder="orderQunatity " className=" input input-bordered w-full max-w-xs" {...register("orderQunatity")} /><br></br>
                        <input className="btn btn-wide" type="submit" value="order" />
                    </form>

                </div>
            </div>


        </div>
    );
}


export default Shopping;