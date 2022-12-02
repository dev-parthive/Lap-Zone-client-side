import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer.';
import useSeller from '../hooks/useSeller';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const[isBuyer] = useBuyer(user?.email)
  console.log(isBuyer)
  console.log(isSeller)
  console.log(isAdmin)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-gray-600 text-white text-base-content">
  
     {
      isBuyer && <li><Link to="/dashboard/myorders">My Orders</Link></li>
     }

    
    {
      isSeller && <><li><Link to="/dashboard/addproduct">Add a product</Link></li>
      <li><Link to="/dashboard/myproducts">My Products</Link></li></>
    }

    {/* jodi admin hoy taile ai route gula show korbe  */}
{

isAdmin &&   <>  <li><Link to="/dashboard/allseller">All sellers</Link></li>
<li><Link to="/dashboard/allbuyers">All Buyers</Link></li></>

}
    </ul>
  
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;