import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/profile?email=${user?.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        reset()
        window.location.reload()
    }
    const [profile, setProfile] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/profile/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, profile)
    return (
        <div>
            <div class="flex w-full">
                <div class="grid  flex-grow card  rounded-box place-items-center">
                    <h1 className='text-2xl font-semibold mb-16'>My Profile</h1>
                    <div class="w-24 h-24 rounded-full">
                        <img src={user?.photoURL} alt='' />
                    </div>
                    <div>
                        <p>Name : {user?.displayName}</p>
                        <p>Email : {user?.email}</p>
                        <p>Education : {profile?.education}</p>
                        <p>Location : {profile?.location}</p>
                        <p>Phone Number : {profile?.number}</p>
                        <p>Linked In: {profile?.linkedin}</p>
                    </div>
                </div>
                <div class="divider divider-horizontal"></div>
                <div class="grid  flex-grow card  rounded-box place-items-center"> <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
                    <input type="text" placeholder="Education" className="input input-bordered  w-full max-w-xs mb-3 " {...register("education")} />
                    <br />

                    <input type="text" placeholder="Location" className="input input-bordered  w-full max-w-xs mb-3 " {...register("location")} />
                    <br />
                    <input type="number" placeholder="Number" className="input input-bordered  w-full max-w-xs mb-3 " {...register("number")} />
                    <br />
                    <input type="text" placeholder="Linked In Profile " className="input input-bordered  w-full max-w-xs mb-3 " {...register("linkedin")} />
                    <br />
                    <input className='btn' type="submit" value="Update Profile" />
                </form></div>
            </div>

            <div className='grid grid-cols-3'>
                <div class="avatar">

                </div>

            </div>

        </div>
    );
};

export default Profile;