import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../../../shared/Loading/Loading';

const AllSellers = () => {

    const {data: sellers = [] , refetch, isLoading} = useQuery({
        queryKey: ['sellers'], 
        queryFn: async ()=>{
            const res = await fetch('https://y-dev-parthive.vercel.app/allsellers' ,{
                headers: {
                    authrization : `bearer ${localStorage.getItem('accessToken')}`
                }
            }) 
            const data = await res.json()
            return data; 
        }
    })

    //handle delete seller 
    const handleDelete = (id) =>{
        console.log(id)
        fetch(`https://y-dev-parthive.vercel.app/seller/${id}`, {
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

    //hanlde verfication for buyer 
    const hanldeVerification = (id) =>{
        fetch(`https://y-dev-parthive.vercel.app/sellers/verfication/${id}`,{
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
            toast.success("now buyer verified")
            }
            else if (!data.success){
                toast.error('Your are not an admin')
            }
        })

    } 
    console.log(sellers)
    if(isLoading){
        return <Loading></Loading>
    }
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
        sellers?.map((seller, i) =>   <tr key={i}>
            <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>

               <div className='flex justify-center'>

                {
                    seller?.verification ||              <button onClick={()=>hanldeVerification(seller._id)} className='btn btn-outline btn-accent btn-sm '>Verify</button>
                }
                {/* {
                    seller?.verification 
                } */}
                <button onClick={()=>handleDelete(seller._id)} className='btn btn-outline btn-info btn-sm ml-2'>Delete</button>
               </div>

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

export default AllSellers; 