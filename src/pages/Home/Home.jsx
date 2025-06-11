import React from 'react';
import Banner from './Banner';
import PopularServices from './PopularServices';
import Testimonials from './Testimonials/Testimonials';
import WhyChoose from './WhyChoose/WhyChoose';
import FeaturedSection from './FeaturedSection';



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <PopularServices></PopularServices>
            <FeaturedSection />
            <WhyChoose></WhyChoose>
             
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;