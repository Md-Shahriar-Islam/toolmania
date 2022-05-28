import React from 'react';
import { useForm } from 'react-hook-form';


const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/tools', {
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
        window.location.reload()

    }
    return (
        <div className="w-4/5 ">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col ">
                <input type="text" placeholder="product name" className=" input input-bordered w-full max-w-xs" {...register("name")} /><br></br>
                <input type="text" placeholder="image" className=" input input-bordered w-full max-w-xs" {...register("image")} /><br></br>
                <input type="number" placeholder="quantity" className=" input input-bordered w-full max-w-xs" {...register("quantity")} /><br></br>
                <input type="number" placeholder="minimumOrder" className=" input input-bordered w-full max-w-xs" {...register("minimumOrder")} /><br></br>
                <input type="number" placeholder="price" className=" input input-bordered w-full max-w-xs" {...register("price")} /><br></br>
                <input type="text" placeholder="description" className=" input input-bordered w-full max-w-xs" {...register("description")} /><br></br>

                <input className="btn  btn-wide" type="submit" value="Add" />
            </form>

        </div>
    );
};

export default AddItem;