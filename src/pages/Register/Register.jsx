

import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';

import Lottie from 'lottie-react';
import registerLottie from '../../assets/lotties/register.json';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser, setUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
            Swal.fire({
              title: 'Good job! Register Successfully',
              text: 'You clicked the button!',
              icon: 'success',
            });
            form.reset();
          })
          .catch((error) => {
            toast.error(`${error.message}`);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10 gap-7 bg-purple-100 dark:bg-gray-800">
      <div className="card bg-base-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full max-w-sm  shadow-2xl py-5">
        <h3 className="font-bold text-2xl text-center">Register Your Account</h3>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              placeholder="name"
              required
            />

            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              placeholder="photo url"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <label className="input validator relative dark:bg-gray-900 dark:border-gray-700 dark:text-white">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                placeholder="Password"
                minLength="6"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                className="bg-transparent w-full outline-none"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </label>
            <p className="validator-hint hidden text-sm text-gray-500 dark:text-gray-400">
              Must be more than 8 characters, including<br />
              At least one number<br />
              At least one lowercase letter<br />
              At least one uppercase letter
            </p>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <SocialLogin />
            <h3 className="font-bold text-center py-2">
              Already have an account?{' '}
              <Link className="text-purple-700 dark:text-purple-400" to="/auth/login">
                Login
              </Link>
            </h3>
          </fieldset>
        </form>
      </div>

      <div className='hidden md:block lg:block'>
        <Lottie className="w-96" loop={true} animationData={registerLottie}></Lottie>
      </div>
    </div>
  );
};

export default Register;
