import React, { useContext } from 'react';
import { Form, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../shared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)

    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{Form : location}} replace></Navigate>
};

export default PrivateRoute;