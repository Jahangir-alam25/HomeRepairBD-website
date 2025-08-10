

import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';

import { servicesCreatedByPromise } from '../../api/servicesApi';
import BookingList from './BookingList';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';

const ServiceToDo = () => {

    const { user } = useAuth();
    
    
    return (
       <div className='bg-purple-100 dark:bg-gray-800 dark:text-white p-4 mx-auto'>
        <Helmet><title>ServicesActivity - HomeRepairBD</title></Helmet>
                 <Suspense fallback={<Loading></Loading>}>
                      <BookingList
                          servicesCreatedByPromise={servicesCreatedByPromise(user.email, user.accessToken)}
                      ></BookingList>
                  </Suspense>
              </div>
    );
};

export default ServiceToDo;