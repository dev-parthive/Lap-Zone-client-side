import { createBrowserRouter } from "react-router-dom"
import Error from "../../pages/ErrorPage/Error"
import Main from '../../layout/Main'
import Home from "../../pages/Home/Home";
import Blog from "../../pages/BLog/Blog";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import DashboardLayout from "../../layout/DashboardLayout";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import CategoryProducts from "../../pages/CategoryProducts/CategoryProducts";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyWhishList from "../../pages/Dashboard/MyWhishList/MyWhishList";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import Dashbaord from "../../pages/Dashboard/dashboard/Dashbaord";
const router = createBrowserRouter([
    {
        path: '/', 
        element:  <Main></Main>,
        children: [
            {

                path: '/', 
                element: <Home></Home>
            },
            {
                path: '*', 
                element: <Error></Error>
            }, 
           {
            path: '/blog', 
            element: <Blog></Blog>
           } , 
           {
            path: '/login', 
            element: <Login></Login>

           } , 
           {
            path: '/register', 
            element: <Register></Register>
           }, 
           {
            path:'/category/:name', 
            element: <CategoryProducts></CategoryProducts>
           }
        ]
    } , 
    {
        path: '/dashboard', 
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>, 
        children: [
            {
                path: '/dashboard', 
                element: <Dashbaord></Dashbaord>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders> 
            }, 
            {
                path: '/dashboard/myorders', 
                element: <MyOrders></MyOrders>
            } , 
            {
                path: '/dashboard/mywhishlist', 
                element: <MyWhishList></MyWhishList>
            },
            {
                path: '/dashboard/myproducts', 
                element: <MyProducts></MyProducts>
            }, 
            {
                path: '/dashboard/addproduct', 
                element: <AddProduct></AddProduct>
            }, 
            {
                path: '/dashboard/allseller', 
                element: <AllSellers></AllSellers>
            }, 
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            }
        ]
    }
])
export default router;