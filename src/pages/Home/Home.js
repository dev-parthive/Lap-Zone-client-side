import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Payment from './Payment';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
                <div className="banner w-full flex justify-center items-center">
               <div className='text-section text-center text-5xl'>
                <h2>Most popular Computer Hub 
                    <p className='text-center mt-3'>In Chattogram </p>
                    <p className='text-center text-xl mt-3'>Our motto is deliver the best product to our customer. <br /> We try to make sure that every customer will happy and visit our shop again. </p>
                </h2>
               </div>
            </div>

            {/* categories section add here  */}
           <div className='mt-16'>
            <h2 className='text-center text-2xl font-bold mb-6 text-orange-600'>Choose Your Favourite Brand/Category</h2>

           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>

           <Link className='bg-gray-50 rounded-lg p-14 text-center text-orange-500 text-2xl font-bold cursor-pointer' to="/category/apple">Apple MackBook</Link>
           <Link className='bg-gray-50 rounded-lg p-14 text-center text-orange-500 text-2xl font-bold cursor-pointer' to="/category/hp">HP Laptop</Link>
           <Link className='bg-gray-50 rounded-lg p-14 text-center text-orange-500 text-2xl font-bold cursor-pointer' to="/category/asus">ASUS Laptop</Link>
                
            </div>
           </div>

            {/* payment section start here  */}

            <div className='mt-12'>
            <Payment ></Payment>
            </div>


        </div>
    );
};

export default Home;