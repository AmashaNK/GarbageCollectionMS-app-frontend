import React from 'react';
import './Login.css';
import './Body.css';
import { useRef, useState, useEffect } from 'react';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] =  useState('');
    const [success, setSuccess] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();      //Prevents the default form submission behavior(page reload)
        console.log(user, pwd);  //Outputs the value of 'user' and 'pwd' to the console
        setUser('');             //Clear the state variable 'user'
        setPwd('');              //Clear the state variable 'pwd'
        setSuccess(true);        //Sets the state variable 'success' to true
    }

    const handleLogin = () =>{
        if(rememberMe){
            //Store user information in local storage
            localStorage.setItem('userData', JSON.stringify({user, pwd}));
        }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href='./'>Go to Home</a>
                    </p>
                </section>
            ) : (
        <div className='body'>
            <div className='wrapper'>
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live='assertive'>{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <h1>
                    Login
                </h1>
                <div className='input-box'>
                    <input 
                        type="text" 
                        id='username' 
                        ref={userRef} 
                        placeholder='Username' 
                        autoComplete='off' 
                        onChange={(e) => setUser(e.target.value)} 
                        value={user} 
                        required
                    />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input 
                        type="password" 
                        id='password' 
                        ref={userRef} 
                        placeholder='Password' 
                        onChange={(e) => setPwd(e.target.value)} 
                        value={pwd} 
                        required 
                    />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input 
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)} 
                        />
                        Remember me
                    </label>
                    <a href='#'>Forgot Password?</a>
                </div>
                <button type='submit' onClick={handleLogin}>Login</button>
                <div className="signup-link">
                    <p>Don't have an account? <a href='./signup'>Sign Up</a></p>
                </div>
            </form>
        </div>
        </div>
            )}
        </>
    );
};
 
export default Login;
