import React from 'react';
import useAuth from '../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const SocialLogin = ({ from }) => {
    const { signInWithGoogle, setUser } = useAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);

                navigate(from || '/');
                toast.success("Login Successfully")

            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline btn-block btn-primary">
                <FcGoogle size={20}></FcGoogle>
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;