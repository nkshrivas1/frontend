
import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "./Layout";
import Products from "../pages/Products";
import { AddProduct } from "../pages/AddProduct";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        element:<Layout />,
        children:[
            // {path:'/login',element:<Login />},
            {path:'/', element:<Navigate to={'/products'} />},
            {path:'/products',element:<Products />},
            {path:'/add-product',element:<AddProduct />},
            {path:'/*', element:<NotFound />}
        ]
    }
])
export default router