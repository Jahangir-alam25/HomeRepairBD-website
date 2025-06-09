import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import { bookingsCreatedByPromise } from '../../api/bookingsApi';
import BookingList from './BookingList';

const BookedServices = () => {
    const {user} = useAuth();
   
    return (
        <div>
           <Suspense fallback={<div>Loading...</div>}>
                <BookingList
                    bookingsCreatedByPromise={bookingsCreatedByPromise(user.email)}
                ></BookingList>
            </Suspense>
        </div>
    );
};

export default BookedServices;