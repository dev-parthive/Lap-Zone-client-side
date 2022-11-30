import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Payment from './Payment';
import './Home.css'

const Home = () => {
    return (
        <div>
                <div className="banner w-full flex justify-center items-center">
               <div className='text-section text-center text-5xl'>
                <h2>Most popular Computer Hub 
                    <p className='text-center mt-3'>In Chattogram </p>
                    <p className='text-center text-xl mt-3'>Our motto is deliver the best food to our customer. <br /> We try to make sure that every customer will happy and visit our resturent again. </p>
                </h2>
               </div>
            </div>
            <div className='mt-12'>
            <Payment ></Payment>
            </div>
        </div>
    );
};

export default Home;