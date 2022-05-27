import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Social from '../SocialLogin/Social';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading';
import { useLocation, useNavigate, } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, uerror] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, merror] = useSendEmailVerification(auth)
    const { register, handleSubmit } = useForm();
    if (loading || updating) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });

    }
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                <input type="name" placeholder="your name" className=" input input-bordered w-full max-w-xs" {...register("name")} /><br></br>
                <input type="email" placeholder="your email" className=" input input-bordered w-full max-w-xs" {...register("email")} /><br></br>
                <input type="password" placeholder="your password " className=" input input-bordered w-full max-w-xs" {...register("password")} /><br></br>
                <input className="btn btn-wide" type="submit" />
            </form>
            <div class="divider">OR</div>
            <Social></Social>



        </div>
    );
};

export default Register;