import Lottie from 'lottie-react'
import React from 'react'
import { Link, useRouteError } from 'react-router'
// import errorLottie from '../../assets/lotties/error.json'
import page404Lottie from '../../assets/lotties/error.json'








const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
     
      <div className='py-24 text-center '>


        <h1 className=' flex justify-center items-center'>
          <Lottie className='w-96' loop={true} animationData={page404Lottie}></Lottie>
        </h1>

        <p className='mb-3 text-xl font-bold  md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </p>
        <Link to='/'>
          <button className='bg-[#0EA106] text-white px-4 py-2 rounded'>Go to HomePage</button>
        </Link>
      </div>
    </>
  )
}

export default ErrorPage