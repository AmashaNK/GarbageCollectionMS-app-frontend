import React from 'react';
import './SignupForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const SignupForm = () => {
  return (
    <div className='background'>
        <div className='container'>
        <form action=''>
            <h1>
                Sign Up
            </h1>
            <div className='input-box1'>
                <input type="text" placeholder='Name' required/>
                
            </div>
            <div className='input-box1'>
                <input type="text" placeholder='Username' required/>
                
            </div>
            <div className='input-box1'>
                <input type="password" placeholder='Password' required/>
                
            </div>
            <div className='input-box1'>
                <input type="password" placeholder='Confirm Password' required/>
            
            </div>
            {/* <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href='#'>Forgot Password?</a>
            </div> */}
            <button type='submit'>Sign Up</button>
            <button type='button'>Back</button>
            <div className="login-link">
                <p>Already Registered  <a href='./login'>Login</a></p>
            </div>
        </form>
    </div>
    </div>
    
  )
}

export default SignupForm;