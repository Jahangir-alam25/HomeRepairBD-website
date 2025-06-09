

import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';

import { servicesCreatedByPromise } from '../../api/servicesApi';
import BookingList from './BookingList';

const ServiceToDo = () => {

    const { user } = useAuth();
    
    
    return (
       <div>
                 <Suspense fallback={<div>Loading...</div>}>
                      <BookingList
                          servicesCreatedByPromise={servicesCreatedByPromise(user.email)}
                      ></BookingList>
                  </Suspense>
              </div>
    );
};

export default ServiceToDo;