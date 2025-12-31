
import {createBrowserRouter, Outlet} from "react-router-dom";
import Login from "../components/Login";
import TodDo from "../components/TodDo";
const Layout = ()=>{
    <>
        <h1>My app</h1>
        <Outlet />
    </>
}
const router = createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {path:'/',element:<Login />},
            {path:'/to-do',element:<TodDo />}
        ]
    }
])
export default router