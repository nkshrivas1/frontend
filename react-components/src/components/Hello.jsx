import React from 'react'
import  logoImage from "../assets/react.svg"
//Destructure
const Hello = ({ username, age = 65, children, status, hideAge, message ,image,color}) => {
    const onlineStatus = status ? 'Online' : 'Offline'
    return (
        <div className={`card ${color}`}>
            {/* <img src='/images/logotalent.jpeg' alt='logo'></img> */}
            <img src={`/images/${image}`} width={'100px'}  height={'100px'} alt='logo'></img>

            <p> Hello! {username}</p>
            <p>Age : {age}</p>
            {status && <p>Onlline</p>}
            {
                message ?
                    <p> Message: {message}</p>
                    : <p> No message </p>
            }
            {children}
        </div>
    )
}

export default Hello