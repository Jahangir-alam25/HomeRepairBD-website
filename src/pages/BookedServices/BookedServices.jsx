import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import { bookingsCreatedByPromise } from '../../api/bookingsApi';
import BookedServicesList from './BookedServicesList';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';


const BookedServices = () => {
    const {user} = useAuth();
   
    return (
        <div>
            <Helmet>
                <title>MyBookings - HomeRepairBD</title>
                
            </Helmet>
           <Suspense fallback={<Loading></Loading>}>
                <BookedServicesList
                    bookingsCreatedByPromise={bookingsCreatedByPromise(user.email, user.accessToken)}
                ></BookedServicesList>
            </Suspense>
        </div>
    );
};

export default BookedServices;