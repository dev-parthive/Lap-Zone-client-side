import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M97Y0GCMVlFbWAow5P9y5XHn2UdTn4p3eskxjZJfZKwhNu9lC65UVW2A4eJFFOtIvoekYfTXSeIWMIj37BoE9gI00sp9fN54m')

const CashPayment = () => {
    const { data } = useLoaderData()
    console.log("order data", data)
    const { productPrice, porductName } = data
    return (
        <div className='bg-white h-full'>
            <h2 className='text-center text-2xl text-orange-600 '>Payment for {data?.porductName} </h2>
            <p className='text-center text-orange-400 text-xl'>Please pay $ {data?.productPrice}</p>

            <div className='w-96 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>

        </div>
    );
};

export default CashPayment;