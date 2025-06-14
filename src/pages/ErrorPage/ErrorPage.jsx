import React from 'react';
import { Link, useRouteError } from 'react-router';
import Lottie from 'lottie-react';
import page404Lottie from '../../assets/lotties/error.json';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-amber-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 px-4">
      <div className="w-full max-w-md text-center">
        <Lottie className="w-48 max-w-sm mx-auto" loop={true} animationData={page404Lottie} />
        <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-2">
          {error?.error?.message || 'Something went wrong!'}
        </h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          The page you're looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition text-white px-6 py-2 rounded-lg shadow-md">
            Go to HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

