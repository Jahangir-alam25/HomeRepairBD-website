
import React, {  useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/lotties/login.json'
import SocialLogin from '../Shared/SocialLogin';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {  setUser, signIn } = useAuth();
    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password).then((result) => {
            const user = result.user;
            
            setUser(user);
            toast.success("Login Successfully")
        }).catch((error) => {
            toast.error(`${error.message}`)
        })
    }
  
    return (
        <div className='flex justify-center items-center min-h-screen gap-7'>
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                <h3 className='font-bold text-2xl text-center'>Login Your Account</h3>
                <form onSubmit={handleLogin} className="card-body ">
                    <fieldset className="fieldset">
                        <label className="label ">Email</label>
                        <input type="email" name='email' className="input " placeholder="Email" />
                        <label className="label ">Password</label>
                        <label className="input  validator relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </label>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                       <SocialLogin></SocialLogin>
                        <h3 className='font-bold text-center py-2'>Don't have an account ? <Link className='text-purple-700' to="/auth/register">Register</Link></h3>
                    </fieldset>
                </form>
            </div>
            <Lottie className='w-96' loop={true} animationData={loginLottie}></Lottie>
        </div>
    );
};

export default Login;