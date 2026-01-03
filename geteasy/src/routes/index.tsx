
import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "./Layout";
import Products from "../pages/products/Products";
import { AddProduct } from "../pages/products/AddProduct";
import NotFound from "../pages/NotFound";
import EditProduct from "../pages/products/EditProduct";

const router = createBrowserRouter([
    {
        element:<Layout />,
        children:[
            // {path:'/login',element:<Login />},
            {path:'/', element:<Navigate to={'/products'} />},
            {path:'/products',element:<Products />},
            {path:'/add-product',element:<AddProduct />},
            {path:'/edit-product/:id',element:<EditProduct />},
            {path:'/*', element:<NotFound />}
        ]
    }
])
export default router