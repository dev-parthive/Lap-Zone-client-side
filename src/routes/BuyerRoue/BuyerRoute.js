import React, { useContext } from 'react';
import { Form, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../hooks/useBuyer.';
import Loading from '../../shared/Loading/Loading';


const BuyerRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const [isBuyer , isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation()
    console.log(isBuyer)
    console.log(isBuyerLoading)
    if(loading ||  isBuyerLoading){
        return <Loading></Loading>
    }
    if(user && isBuyer){
        return children
    }

    return <Navigate to="/login" state={{Form : location}} replace></Navigate>
};

export default BuyerRoute;