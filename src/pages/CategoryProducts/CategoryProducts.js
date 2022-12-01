import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../../shared/Loading/Loading';
const CategoryProducts = () => {
    const {name} = useParams() 
    console.log(name)

    const {data:products = [], isLoading}  = useQuery({
        queryKey: ['products', name], 
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/products/${name}`)
            const data = await res.json()
            return data.data
        }
    })
 console.log(products)
    const [product , setProduct]  = useState({})
    console.log(product)

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-orange-600  text-3xl'>You Choosed  {name}</h2>
            <div className='my-9 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {
                products.map((product , i) => <ProductCard setProduct={setProduct}  key={i} product={product}></ProductCard>)
            }

            </div>
            <BookingModal product={product}></BookingModal>

        </div>
    );
};

export default CategoryProducts;