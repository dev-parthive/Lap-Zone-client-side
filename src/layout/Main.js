import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import {Outlet} from 'react-router-dom'
const main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default main;