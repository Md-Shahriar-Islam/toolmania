import React, { useEffect, useState } from 'react';
import useAdmin from '../CustomHook/useadmin';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState({})
    useEffect(() => {
        fetch('https://limitless-island-64080.herokuapp.com/profile')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handlebtn = email => {
        const url = `https://limitless-island-64080.herokuapp.com/profile/user?email=${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

        window.location.reload()
    }
    return (
        <div>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>E-mail</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td><button onClick={() => handlebtn(user.email)} className='btn btn primari'>Make Admin</button></td>


                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MakeAdmin;