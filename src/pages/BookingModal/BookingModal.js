import { es } from 'date-fns/locale';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({product}) => {
    // const {name ,} = product
    console.log(product)
    const {user} = useContext(AuthContext)
    const handleBooking = (event) =>{
        event.preventDefault()
       const order = {
        userName :event.target.name.value , 
        userEamil :event.target.email.value,
        userPhone : event.target.phone.value,
       userLocation : event.target.location.value
       }
       console.log(order)
       fetch('http://localhost:5000/orders',{
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        }, 
        body: JSON.stringify(order)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        toast.success(data.message)
        event.target.reset()
       })

    }
    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold"><span className='text-orange-400'>Product  </span>: {product?.name}</h3>
            <h3 className="text-lg font-bold"><span className='text-orange-400'>Price  </span>: <span className='text-2xl font-bold'>৳</span> {product?.resalePrice}</h3>
            <form onSubmit={handleBooking} className='mt-10'>
              <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full Name" className=" input input-bordered w-full mb-5" />
              <input name='email' defaultValue={user?.email} type="Email" placeholder="Email " className=" input input-bordered w-full mb-5" disabled />
              <input name="phone" type="number" placeholder="Phone Number "  className=" input input-bordered w-full mb-5" required/>
              <input name="location" type="text" placeholder="Meeting  Location "  className=" input input-bordered w-full mb-5" required/>
  
              <input className='  w-full mb-5 btn ' type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
};

export default BookingModal;