import React from 'react'
import  productImage from "../assets/react.svg"
//Destructure
const Hello = ({ productName, price , children, status, hideAge, description }) => {
    return (
        <div className='card'>
            {/* <img src='/images/logotalent.jpeg' alt='logo'></img> */}
            <img src={productImage} alt='logo'></img>

            <p> Name: {productName}</p>
            <p>Price : {price}</p>
             <p>{status? 'In stock' : 'Out of stock'}</p>
            {
                description ?
                    <p> Message: {description}</p>
                    : <p> No description </p>
            }
            {children}
        </div>
    )
}

export default Hello