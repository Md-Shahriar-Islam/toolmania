import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders/all`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-16'>All Orders</h1>
            {
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>S.I.NO</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.productname}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default ManageOrders;