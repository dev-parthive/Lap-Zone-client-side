import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
  
    <li><Link to="/dashboard/myorders">My Orders</Link></li>
    <li><Link to="/dashboard/mywhishlist">My WhishList</Link></li>
    <li><Link to="/dashboard/addproduct">Add a product</Link></li>
    <li><Link to="/dashboard/myproducts">My Products</Link></li>
    <li><Link to="/dashboard/allseller">All sellers</Link></li>
    <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
    </ul>
  
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;