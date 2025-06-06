import React from 'react';
import Banner from './Banner';
import PopularServices from './PopularServices';
import Testimonials from './Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;