import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const url = `http://localhost:5000/products?email=${user?.email}`

    const { data: products = [] , isLoading , refetch} = useQuery({
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

    //handle delete product 
    const handleDeleteProduct = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/product/delete/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data =>{
            if(data.success){
                toast.success(data.message)
                refetch()
            }
        })
    }

    const hanldeAdvertise = (id) =>{
    console.log(id)      
    fetch(`http://localhost:5000/product/advertise/${id}`,{
            method: "PUT", 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                refetch()
            toast.success("Product is gone to Advertise")
            }
            else if (!data.success){
                toast.error('Your are not seller')
            }
        })  

    }
    console.log(products)
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
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                              products?.length &&  products.map((product, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-xl">
                                                <img alt='' src={product?.pitcture} />
                                            </div>
                                        </div>


                                    </td>
                                    <td>{product?.name}</td>
                                    <td className='text-orange-500'> <span className='text-2xl'>৳</span> {product?.resalePrice}</td>
                                    <td > <button onClick={()=>hanldeAdvertise(product._id)} className='btn btn-sm btn-outline btn-secondary'>Advertise</button> <button onClick={()=> handleDeleteProduct(product._id)} className='btn btn-outline btn-accent  btn-sm'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;