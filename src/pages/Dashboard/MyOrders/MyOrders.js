import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../shared/Loading/Loading';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `https://y-dev-parthive.vercel.app/orders?email=${user?.email}`

    const { data: orders = [] , isLoading} = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url , {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    console.log(orders)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='p-7'>
            <h3 className='text-center text-orange-500 text-2xl'>My Orders </h3>
            <div>
                <div className="mt-8 overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                              orders?.length &&  orders.map((order, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-xl">
                                                <img alt='' src={order?.productImg} />
                                            </div>
                                        </div>


                                    </td>
                                    <td>{order?.porductName}</td>
                                    <td className='text-orange-500'> <span className='text-2xl'>৳</span>
                                     {order?.productPrice}
                                    </td>
                                    <td > {
                                   order?.productPrice &&  !order.paid && 
                                   <Link to={`/dashboard/payment/${order._id}`}>
                                   <button className='btn btn-outline btn-accent'>Pay</button>
                                   </Link>
                                    
                                    }
                                    {
                                        order.price && order.paid && <span className='text-success'>Paid</span>
                                    }
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;