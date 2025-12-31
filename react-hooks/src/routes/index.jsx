
import {createBrowserRouter, Navigate} from "react-router-dom";
import TodDo from "../components/TodDo.jsx";
import Layout from "./Layout.jsx";
import Login from "../components/Login.jsx";

const router = createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {path:'/login',element:<Login />},
            {path:'/to-do',element:<TodDo />},
            {path:'/*', element:<Navigate to='/login' />}
        ]
    }
])
export default router