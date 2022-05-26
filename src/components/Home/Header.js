import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="dashboard">Dashboard</Link></li>
                        <li><Link to="login">LogIn</Link></li>
                        <li><Link to="register">Register</Link></li>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="hidden lg:flex justify-end">
                <ul class="menu menu-horizontal  p-0">
                    <li><Link to="dashboard" className="mx-2">Dashboard</Link></li>
                    <li><Link to="login" className="mx-2">LogIn</Link></li>
                    <li><Link to="register" className="mx-2">Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;