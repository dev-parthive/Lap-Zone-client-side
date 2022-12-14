import React, { useContext } from 'react';
import { Form, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import Loading from '../../../shared/Loading/Loading';


const SellerRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const [isSeller , isSellerLoading] = useSeller(user?.email)
    const location = useLocation()
    console.log(isSeller)
    console.log(isSellerLoading)
    if(loading ||  isSellerLoading){
        return <Loading></Loading>
    }
    if(user && isSeller){
        return children
    }

    return <Navigate to="/login" state={{Form : location}} replace></Navigate>
};

export default SellerRoute;