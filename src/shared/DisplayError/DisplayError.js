import React from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError();
    const handleLogout = () =>{
        logOut()
        .then( ()=>{
          toast.success("use logged out successfuly")
        } ) 
        .catch(err =>{
          const message = err.message
          toast.error(message)
          console.log(err)
        })
      }
     return (
        <div>
            <p className='text-red-500 text-center text-2xl'>Something wen wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleLogout} className='btn btn-outline btn-success ml-2'>Log Out</button> and log back in </h4>
        </div>
    );
};

export default DisplayError;