import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function useAdmin(email) {

    const [data, setData] = useState({})
    let isAdmin = 0

    useEffect(() => {
        fetch(`https://limitless-island-64080.herokuapp.com/profile/user?email=${email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    if (data.role) {
        return isAdmin = 1
    }
    else {
        return isAdmin
    }

}
export default useAdmin