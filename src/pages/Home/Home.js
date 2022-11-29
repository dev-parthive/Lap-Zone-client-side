import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Payment from './Payment';

const Home = () => {
    return (
        <div>
            <h3> THis is home. Welcome </h3>
            <Payment></Payment>
        </div>
    );
};

export default Home;