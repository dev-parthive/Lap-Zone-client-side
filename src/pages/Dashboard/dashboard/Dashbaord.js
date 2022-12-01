import React from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Dashbaord = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>

                <p><BsFillArrowLeftCircleFill className='text-2xl text-orange-500 mr-3'></BsFillArrowLeftCircleFill> </p>
                <h2 className="text-2xl  text-orange-500"> Choose an optoin from the side Menu</h2>
            </div>

        {/* this is for the medium device  */}
        <div className='lg:hidden'>

            <h1 className='text-center mt-5 '>Open the side menu by clicking on humberger icon in the right side of the Navbar </h1>
        </div>

        </div>
    );
};

export default Dashbaord;