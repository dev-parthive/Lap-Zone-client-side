import { createBrowserRouter } from "react-router-dom"
import Error from "../../pages/ErrorPage/Error"
import Main from '../../layout/Main'
import Home from "../../pages/Home/Home";
import Blog from "../../pages/BLog/Blog";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import DashboardLayout from "../../layout/DashboardLayout";
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
           }
        ]
    } , 
    {
        path: '/dashboard', 
        element:  <DashboardLayout></DashboardLayout> , 
        children: [
            {
                path: '/dashboard'
            }
        ]
    }
])
export default router;