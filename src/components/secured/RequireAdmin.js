import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Authentication/Loading';
import useAdmin from '../CustomHook/useadmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    let admin = useAdmin(user.email)
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;


};

export default RequireAdmin;