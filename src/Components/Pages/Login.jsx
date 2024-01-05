import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='body'>
        <div className='wrapper'>
        <form action=''>
            <h1>
                Login
            </h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className="signup-link">
                <p>Don't have an account? <a href='./signup'>Sign Up</a></p>
            </div>
        </form>
    </div>
    </div>
    
  )
}
 
export default Login;
