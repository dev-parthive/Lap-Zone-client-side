import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const {data: buyers = [] , refetch} = useQuery({
        queryKey: ['buyers'], 
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/allbuyer' ,{
                headers: {
                    authrization : `bearer ${localStorage.getItem('accessToken')}`
                }
            }) 
            const data = await res.json()
            return data; 
        }
    })

    console.log(buyers)
    return (
        <div className='p-7'>
           <h1 className='text-center text-2xl font-bold text-orange-600 mb-5'>Here is the list of all sellers</h1>
           <div>
           <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>

    {
        buyers?.map((seller, i) =>   <tr key={i}>
            <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>
                <button className='btn btn-outline btn-info btn-sm'>Delete</button>

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

export default AllBuyers;