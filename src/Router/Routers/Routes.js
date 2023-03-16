import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../../Layout/Main/Main";
import Product from "../../Pages/CategoryProduct/Product";
import ProductDetail from "../../Pages/CategoryProduct/ProductDetail";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyBookIng from "../../Pages/DashBoard/MyBookIng/MyBookIng";

import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import BuyerPrivate from "../BuyerPrivate/BuyerPrivate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/products/:category_name',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?product_category=${params.category_name}`)
            },


            {
                path: '/product/:id',
                element: <ProductDetail></ProductDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <SignUp></SignUp>
            },
            

        ]
    },

    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [

            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>,
            },

           
            {
                path: '/dashboard/myorder',
                element: <BuyerPrivate><MyBookIng></MyBookIng></BuyerPrivate>,
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <BuyerPrivate><Payment></Payment></BuyerPrivate>,
            //     loader: ({params})=>fetch(`http://localhost:5000/bookingdata/${params.id}`)
            // },
        ]

    }
]);

export default router