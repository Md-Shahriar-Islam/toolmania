import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading';
import Social from '../SocialLogin/Social';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let error
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        lerror,
    ] = useSignInWithEmailAndPassword(auth);
    if (lerror) {
        error = lerror?.message
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div >

            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                <input type="email" placeholder="your email" className=" input input-bordered w-full max-w-xs" {...register("email")} /><br></br>
                <input type="password" placeholder="your password " className=" input input-bordered w-full max-w-xs" {...register("password")} /><br></br>
                <input className="btn btn-wide" type="submit" />
            </form>
            <div class="divider">OR</div>
            <Social></Social>
            {
                error && lerror
            }

        </div>
    );
};

export default Login;