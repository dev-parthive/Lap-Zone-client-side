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
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoue/BuyerRoute";
import Payment from "../../pages/Home/Payment";
import CashPayment from "../../pages/Dashboard/dashboard/payment/CashPayment";
import DisplayError from "../../shared/DisplayError/DisplayError";
const router = createBrowserRouter([
    {
        path: '/', 
        element:  <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard', 
                element: <Dashbaord></Dashbaord>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders> </BuyerRoute>
            }, 
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><CashPayment></CashPayment></BuyerRoute>,
                loader: ({params}) => {
                    return fetch(`https://y-two-sigma.vercel.app/order/${params.id}`)
                }
            }, 

            {
                path: '/dashboard/myproducts', 
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            }, 
            {
                path: '/dashboard/addproduct', 
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            }, 
            {
                path: '/dashboard/allseller', 
                element: <AdminRoute> <AllSellers></AllSellers></AdminRoute>
            }, 
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute> <AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    }
])
export default router;