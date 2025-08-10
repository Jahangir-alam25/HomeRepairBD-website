import React from 'react';
import Banner from './Banner';
import PopularServices from './PopularServices';
import Testimonials from './Testimonials/Testimonials';
import WhyChoose from './WhyChoose/WhyChoose';
import FeaturedSection from './FeaturedSection';
import { Helmet } from 'react-helmet-async';
import PremiumClients from './PremiumClients';
import FAQ from '../FAQ/FAQ';



const Home = () => {
    return (
        <div className='bg-purple-100 dark:bg-gray-800 dark:text-white'>
            <Helmet>
                <title>Home - HomeRepairBD</title>
                
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <FeaturedSection />
            <WhyChoose></WhyChoose>
            <FAQ></FAQ>
            <Testimonials></Testimonials>
            <PremiumClients></PremiumClients>
        </div>
    );
};

export default Home;