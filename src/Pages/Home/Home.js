import React from 'react';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <hr />
            <Products></Products>
            <hr />
        </div>
    );
};

export default Home;