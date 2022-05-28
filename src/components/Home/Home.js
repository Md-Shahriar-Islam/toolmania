import React from 'react';
import Social from '../Authentication/SocialLogin/Social';
import Business from '../Business/Business';
import Outlet from '../Extra/Outlet';
import Tophy from '../Extra/Tophy';
import Banner from './Banner';
import Header from './Header';
import Reviews from './Reviews';
import ToolBox from './ToolBox';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolBox></ToolBox>
            <Business></Business>
            <Reviews></Reviews>
            <Tophy></Tophy>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;