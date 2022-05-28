import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../CustomHook/useadmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const admin = useAdmin(user?.email)
    console.log(admin)
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
                        {
                            admin ?
                                <>
                                    <li><Link to="add">Add a product</Link></li>
                                    <li><Link to="user">Make Admin</Link></li>
                                    <li><Link to="order">Manage orders</Link></li>

                                </>

                                :
                                <>
                                    <li><Link to="myorder">My Orders</Link></li>
                                    <li><Link to="review">Add a review</Link></li>

                                </>
                        }
                        <li><Link to="profile">my profile</Link></li>


                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;