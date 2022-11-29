import { createBrowserRouter } from "react-router-dom"
import Error from "../../pages/ErrorPage/Error"
import Main from '../../layout/Main'
import Home from "../../pages/Home/Home";
import Blog from "../../pages/BLog/Blog";
import Login from "../../pages/Login/Login";
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

           }
        ]
    }
])
export default router;