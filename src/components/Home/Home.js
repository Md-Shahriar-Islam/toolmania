import React from 'react';
import Social from '../Authentication/SocialLogin/Social';
import Business from '../Business/Business';
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
        </div>
    );
};

export default Home;