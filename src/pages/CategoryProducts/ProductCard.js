import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs'
import useVerified from '../../hooks/useVerified';
const ProductCard = ({product , setProduct}) => {
    // console.log(product)
    const {pitcture: picture , name , brand, locatiion : location, description, mothsOfUse, originalPrice, postedTime , resalePrice , sellerName , verification , condition , sellerEmail} = product
    // console.log(picture , name , brand, location, description, mothsOfUse, originalPrice, postedTime , resalePrice , sellerName , verification , condition , )
    const [isVerified, isVerifiedLoading] = useVerified(sellerEmail)
    console.log(isVerified)
let tik 
    if(isVerified){
        tik =  <BsPatchCheckFill></BsPatchCheckFill>
    }
    let message
    if(verification === "verfied"){
         message =  <BsPatchCheckFill></BsPatchCheckFill>
    }



    return (
        <div className='bg-slate-100 p-6 text-black rounded-xl'>
            <div className='flex justify-center'>
                <img className='w-3/4' src={picture} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-bold'>{name}</h2>
                <p><span className='text-orange-600 font-semibold'>Location</span>: {location} </p>
                <p><span className='text-orange-500 font-bold'>Reseale Price</span>: <span className='text-2xl font-bold'>৳</span>{resalePrice}</p>
                <p><span className='text-orange-500 font-bold'>Original Price</span>: <span className='text-2xl font-bold'>৳</span>{originalPrice}</p>
                <p><span className='text-orange-500 font-bold'>Used</span>: {mothsOfUse} <span>months</span></p>
                <p><span className='text-orange-500 font-bold'>Condition</span>: {condition} </p>
                <p> <span className='text-orange-500 font-semibold'>posted on</span>: {postedTime}</p>
                <div className='flex items-center'>
                <p> <span className='text-orange-500 font-semibold'>Seller</span>: {sellerName}</p>
                <span className='ml-3'>{message} {tik}</span>
                </div>
                <p> <span className='text-orange-500 font-semibold'>Description</span>: {description}</p>
            </div>
          <div className='flex justify-center mt-5'>
          <label
          onClick={()=> setProduct(product)}
          htmlFor="booking-modal"  className='btn btn-outline btn-accent'>Purchase Now</label>
          </div>
        </div>
    );
};

export default ProductCard;