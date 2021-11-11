import React from 'react';
import Banner from './Banner';
import Products from './Products';
import ReviewShow from './ReviewShow';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <hr />
            <Products></Products>
            <hr />
            <ReviewShow></ReviewShow>
        </div>
    );
};

export default Home;