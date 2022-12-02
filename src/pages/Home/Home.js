import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Payment from './Payment';
import './Home.css'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../shared/Loading/Loading';
import useVerified from '../../hooks/useVerified';
import AddVertiseCard from './AddVertiseCard';

const Home = () => {
    const {user} = useContext(AuthContext)
    const [isVerified] = useVerified(user?.email)
    const {data: advertise = [] , isLoading} = useQuery({
        queryKey: ['advertise'], 
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/product/advertise')
            const data = await res.json()
            return data;
        }
    })
    console.log(advertise)

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(isVerified)

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

        {/* advertise section is here  */}
           {
            advertise.length &&  <div className='mt-12'>
            <h3 className='text-center text-2xl text-orange-500'>Advertise products are here </h3>
           <div  className='my-9 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
           {
                advertise.map(product => <AddVertiseCard key={product._id} product={product}></AddVertiseCard>)
            }
           </div>

        </div>
           }

            {/* payment section start here  */}
            <div className='mt-12'>
            <Payment ></Payment>
            </div>


        </div>
    );
};

export default Home;