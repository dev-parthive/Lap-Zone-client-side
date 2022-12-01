import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/orders?email=${user?.email}`

    const { data: orders } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    console.log(orders)
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
                                orders?.length && orders.map((order, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-xl">
                                                <img alt='' src={order?.productImg} />
                                            </div>
                                        </div>


                                    </td>
                                    <td>{order?.porductName}</td>
                                    <td className='text-orange-500'> <span className='text-2xl'>৳</span> {order?.productPrice}</td>
                                    <td > <button className='btn btn-outline btn-accent'>Pay</button></td>
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