import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
// import { servicesCreatedByPromise } from '../../api/servicesApi';
import ServiceLists from './ServiceLists';
// import { servicesEmailByPromise } from '../../api/serviceEmailapi';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';
import { servicesCreatedByPromise } from '../../api/servicesApi';

const MyPostedService = () => {

    

    const {user} = useAuth();
   
    return (
        <div className='p-4 mx-auto bg-amber-50 dark:bg-gray-800 dark:text-white'>
            <Helmet>
                <title>MyServices - HomeRepairBD</title>
                
            </Helmet>
           <Suspense fallback={<Loading></Loading>}>
                <ServiceLists
                    servicesCreatedByPromise={servicesCreatedByPromise(user.email, user.accessToken)}
                ></ServiceLists>
            </Suspense>
        </div>
    );
};

export default MyPostedService;
