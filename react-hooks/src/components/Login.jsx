import React, { useEffect, useState } from 'react'

const Login = () => {
    const users = [
        { username: 'abcd', password: 'Admin@123' },
        { username: 'xyz', password: 'data@123' },
        { username: 'admin', password: 'Admin@123' },
        { username: 'java', password: 'jab@123' },
    ]
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [bgcolor, setBgcolor] = useState("");

    const [isLoggedIn,setIsLoggedIn] = useState(null);
    const login = () => {
         setIsLoggedIn(users.some(user => user.username == username
            && user.password == password))
        if (isLoggedIn) {
            setMessage("Login Successfully.")
        } else {
            setMessage("Login Failed.")

        }
    }

    useEffect(() => {
        if(isLoggedIn == null){
            setBgcolor('blue')
        }
      else if(isLoggedIn == true){
        setBgcolor('green')
      }
      else{
        setBgcolor('red')
      }
    }, [isLoggedIn])
    
    return (
        <>
            <div className="login-form" style={{backgroundColor:bgcolor}}>
                <label htmlFor="username">Username</label>
                <input type='text' name='username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input type='password' name='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <p>{message}</p>
            <button onClick={login} className="button">
                Login
            </button>
        </>
    )
}

export default Login