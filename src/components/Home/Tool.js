import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const { _id, name, image, quantity, minimumOrder, price, description } = props.tool;
    const navigate = useNavigate()
    const shoppingCart = () => {
        navigate(`/shop/${_id}`)
    }
    return (
        <div>
            <div class="card w-96 h-96 bg-base-100 my-6 shadow-xl image-full lg:mx-auto">
                <figure><img className="h-80" src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Quantiy:{quantity}</p>
                    <p>minimumOrder:{minimumOrder}</p>
                    <p>Price:{price}</p>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={shoppingCart} class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;