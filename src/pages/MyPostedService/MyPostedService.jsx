import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import { servicesCreatedByPromise } from '../../api/servicesApi';
import ServiceLists from './ServiceLists';

const MyPostedService = () => {

    

    const {user} = useAuth();
   
    return (
        <div className='m-4 mx-auto'>
           <Suspense fallback={<div>Loading...</div>}>
                <ServiceLists
                    servicesCreatedByPromise={servicesCreatedByPromise(user.email, user.accessToken)}
                ></ServiceLists>
            </Suspense>
        </div>
    );
};

export default MyPostedService;
