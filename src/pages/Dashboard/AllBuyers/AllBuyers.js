import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../../../shared/Loading/Loading';

const AllBuyers = () => {
    const {data: buyers = [] , refetch , isLoading} = useQuery({
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
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/seller/${id}`, {
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
    return (
        <div className='p-7'>
           <h1 className='text-center text-2xl font-bold text-orange-600 mb-5'>Here is the list of all Buyers</h1>
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
                <button onClick={()=>handleDelete(seller._id)} className='btn btn-outline btn-info btn-sm'>Delete</button>

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