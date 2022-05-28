import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Authentication/Loading';
// 

const MyOrders = () => {
    const [user] = useAuthState(auth)

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure??want to delete');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Success:', data);
                    }

                })
            window.location.reload()
        }
    }
    return (
        <div>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>S.I.NO</th>
                        <th>Name</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.productname}</td>
                            <td><button onClick={() => handleDelete(order._id)} className='btn btn primary'>Detele Order</button></td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>


    );
};

export default MyOrders;