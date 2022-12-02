import React, { useContext } from 'react';
import { Form, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../shared/Loading/Loading';


const AdminRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const [isAdmin , isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()
    console.log(isAdmin)
    console.log(isAdminLoading)
    if(loading ||  isAdminLoading){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to="/login" state={{Form : location}} replace></Navigate>
};

export default AdminRoute;