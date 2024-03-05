import React from 'react';
import './Login.css';
import '../Body.css';
import { useRef, useState, useEffect } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import Sidebar from '../../Sidebar';
import Navbar from '../../Navbar';
import { useNavigate,Link,useLocation } from 'react-router-dom';
import {LoginService} from '../../Service/AuthService';
// import useAuth from '../hooks/useAuth';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {setAuth}=useAuth();

    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from.pathname ||'/';

    const userRef = useRef();
    const errRef = useRef();

    const [nicNo, setNicNo] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] =  useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [nicNo, password])

    const handleSubmit = async (e) =>{
        e.preventDefault();      //Prevents the default form submission behavior(page reload)
        try{
        const response= await LoginService({nicNo, password});
        console.log(response);
        //console.log(response?.data?.accessToken)
        const accessToken=response?.data?.accessToken;
        const refreshToken=response?.data?.refreshToken;
        const role=response?.data?.role;
        //console.log(response?.data?.role);
        setAuth({nicNo,accessToken,refreshToken,role});
          //Outputs the value of 'user' and 'pwd' to the console
        setNicNo('');             //Clear the state variable 'user'
        setPassword('');              //Clear the state variable 'pwd'
        navigate(from,{replace:true})
        // navigate to Admin dashboard
        //navigate('/admin-dashboard');
        }catch(err){
            if(!err?.response){
                setErrMsg('No server Response');
            }
            else if(err.response?.status===400){
                setErrMsg('Missing NIC number or password');
            }
            else if(err.response?.status===401){
                setErrMsg('Unauthorized');
            }
            else{
                setErrMsg('login Failed');
            }
        }
        

    }

    const handleLogin = () =>{
        if(rememberMe){
            //Store user information in local storage
            localStorage.setItem('userData', JSON.stringify({nicNo, password}));
        }

    };

    return (
      <div className="body">
        <div className="wrapper">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                id="nicNo"
                ref={userRef}
                placeholder="NIC Number"
                autoComplete="off"
                onChange={(e) => setNicNo(e.target.value)}
                value={nicNo}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                id="password"
                ref={userRef}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <FaLock className="icon" />
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
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <div className="signup-link">
              <p>
                Don't have an account? <a href="./signup">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
};
 
export default Login;
