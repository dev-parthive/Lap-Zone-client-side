import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
const Navbar = () => {
  const {user , logOut}  = useContext(AuthContext)
  console.log(user)
  const handleLogout = () =>{
    logOut()
    .then( ()=>{
      toast.success("use logged out successfuly")
    } )
    .catch(err =>{
      const message = err.message
      toast.error(message)
      console.log(err)
    })
  }
  
  
  const menuItems = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/blog">Blog</Link></li>



  {
    user?.email ? <li><Link to="/dashboard">Dashboard</Link></li> : 
   <>
   
   <li><Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>
   
   </>
  }

  
  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-orange-600 font-bold">Lap-Zone</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
    {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user?.email ?   <><a  className="">{user?.photoURL ? <><img src={user.photoURL} className="rounded-2xl w-8" alt="img" /></>
        :
        <><small>{user?.displayName
          ? <span className='text-orange-600 text-xl'>{user?.displayName}</span>  : <span>{user?.email}</span>}</small></>
        }</a> 
          <button onClick={handleLogout} className='btn btn-outline btn-success ml-2'>Log Out</button></>
          : 
          <>
          </>
        }
        </div>
       {
        user?.email &&  <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> 
       }
      </div>
    );
};

export default Navbar;