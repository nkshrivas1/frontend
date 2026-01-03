import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <h1>My app</h1>
            <ul>
                <li>
                    <Link to={'/add-product'} >Add Product</Link>
                    <Link to={'/products'} >Products</Link>

                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout