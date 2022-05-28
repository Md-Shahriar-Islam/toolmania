import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-wide drawer-button lg:hidden">Open Side Menu</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="myorder">My Orders</Link></li>
                        <li><Link to="review">Add a review</Link></li>
                        <li><Link to="profile">my profile</Link></li>
                        <li><Link to="add">Add a product</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;