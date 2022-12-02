import React from 'react';
import { Link } from 'react-router-dom';

const AddVertiseCard = ({product}) => {
    return (
        <div className='bg-slate-100 p-6 text-black rounded-xl'>
            <div className='flex justify-center'>
                <img className='w-3/4' src={product.pitcture} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-bold'>{product.name}</h2>
                <p><span className='text-orange-600 font-semibold'>Location</span>: {product.location} </p>
                <p><span className='text-orange-500 font-bold'>Reseale Price</span>: <span className='text-2xl font-bold'>৳</span>{product.resalePrice}</p>
                <p><span className='text-orange-500 font-bold'>Original Price</span>: <span className='text-2xl font-bold'>৳</span>{product.originalPrice}</p>
                <p><span className='text-orange-500 font-bold'>Used</span>: product.{product.mothsOfUse} <span>months</span></p>
                <p><span className='text-orange-500 font-bold'>Condition</span>: {product.condition} </p>
                <p> <span className='text-orange-500 font-semibold'>posted on</span>: {product.postedTime}</p>
                <div className='flex items-center'>
                <p> <span className='text-orange-500 font-semibold'>Seller</span>: {product.sellerName}</p>
                <span className='ml-3'>{product.message}</span>
                </div>
                <p> <span className='text-orange-500 font-semibold'>Description</span>: {product.description}</p>
            </div>
          <div className='flex justify-center mt-5'>
          </div>
        </div>
    );
};

export default AddVertiseCard;