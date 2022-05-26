import React from 'react';
import { useForm } from 'react-hook-form';
import Social from '../SocialLogin/Social';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

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