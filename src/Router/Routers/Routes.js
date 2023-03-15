import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layout/Main/Main";
import Product from "../../Pages/CategoryProduct/Product";
import ProductDetail from "../../Pages/CategoryProduct/ProductDetail";

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
            

        ]
    }
]);

export default router