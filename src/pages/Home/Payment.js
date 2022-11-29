import React from 'react';
import img1 from '../../assets/payment/bkash.jpeg'
import img2 from '../../assets/payment/download (1).png'
import img3 from '../../assets/payment/download.png'
import img4 from '../../assets/payment/images.png'
import './payment.css'
const Payment = () => {
    return (
        <div>
            <h2 className='text-center text-orange-500 text-4xl'>You can pay us Using </h2>
            <div className='payment-img-div'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Payment;