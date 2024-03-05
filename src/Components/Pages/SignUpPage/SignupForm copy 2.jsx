import React from 'react';
import '../Body.css';
import './SignupForm.css';
import { useState, useEffect ,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Navbar from '../../Navbar';
import axios from '../../api/axios'
import { RegisterService } from '../../Service/AuthService';

const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;
const PWD_REGX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL='/api/v1/auth/register'

const SignupForm = () => {
    const userRef=useRef();
    const errRef=useRef();

    const navigate = useNavigate();

    const [role, setRole] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nicNo,setNicNo]=useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const roles = ['ADMIN', 'HOUSEHOLDER'];

    //Instructions object mapping each role to specific instructions
    const roleInstructions = {
        Admin: {
            name: 'Enter your full name',
            username: 'Use your work id number as your username',
            mobileNumber:'Enter your mobile number',
            password:'At least 12 characters long',
            confirmPassword: 'Re-enter your password'
        },
        HouseOwner: {
            name: 'Enter your full name',
            username: 'Use your e-mail as your username',
            mobileNumber:'Enter your mobile number',
            password:'At least 12 characters long',
            confirmPassword: 'Re-enter your password'
        }
    };

    const [inputTitles, setInputTitles] = useState(roleInstructions[role] || {}); //Default to Admin instructions

    useEffect(() => {
        const newInputTitles = roleInstructions[role] || {};
        console.log('New Input Titles:', newInputTitles);
        setInputTitles(newInputTitles);
      }, [role]);
    

    //Validate the signup form

    const validateForm = () => {
        if(!role || !firstName || !lastName || !mobileNumber || !password || !confirmPassword){
            alert('Please fill in all fields');
            return false;
        }

        // switch(role){
        //     case 'Admin':
        //         if(!/^[A-Z]\d{4}$/.test(username)){
        //             alert('Invalid type of username');
        //             return false;
        //         }
        //         break;
        //     // case 'Vehicle':
        //     //     if(!/^[A-Z]{2,3}-\d{4}$/.test(username)){
        //     //         alert('Invalid type of username');
        //     //         return false;
        //     //     }
        //     //     break;

        //     case 'HouseOwner':
        //         if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)){
        //             alert('Enter your valid e-mail address.');
        //             return false;
        //         }
        //         break;
        // }

        //Password confirmation

        if(password !== confirmPassword){
            alert('Password do not match.');
            return false;
        }

        return true;
    };

    const handleSignup = async(e)=>{
        e.preventDefault();
        //Validation checks before making the signup request
  //      if(validateForm()){
            console.log('Role:', role);
            console.log('Firt Name:', firstName);
            console.log('Username:', lastName);
            console.log('Mobile Number:', mobileNumber);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            const response=RegisterService({role,firstName,lastName,email,nicNo,password});
            console.log((await response).data);
            
            // const response=await axios.post(REGISTER_URL,
            //     JSON.stringify({role,firstName,lastName,email,nicNo,password,role}),
            //     {
            //         headers:{'Content-Type':'application/json'},
            //         //withCredentials:true

            //     });
            //     console.log(response.data);
            //     console.log(response.accessToken);
            //     console.log(JSON.stringify(response));
    //    }
    };

    const goBack = () => {
        //Navigate back to the home page
        navigate('/');
    };


    return (
        <div>
            <Navbar />
        <div className='body'>
            <div className='container'>
            
            <form onSubmit={handleSignup}>
                <h1>
                    Sign Up
                </h1>
                <div className='dropdown'>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="" className='role-list' disabled>Select your role</option>
                        {roles.map((role) => (
                        <option key={role} value={role} className='role-list'>{role}</option>
                    ))}
                </select>
                </div>
                <div className='input-box1'>
                    <input 
                        type="text" 
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                        title={inputTitles.name} 
                        required
                    />   
                </div>

                <div className='input-box1'>
                    <input 
                        type="text" 
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                        title={inputTitles.name} 
                        required
                    />       
                </div>

                <div className='input-box1'>
                    <input 
                        type="text" 
                        placeholder='Email Address' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        title={inputTitles.username} 
                        required
                    />
                </div>            

                <div className='input-box1'>
                    <input 
                        type="text" 
                        placeholder='NIC No' 
                        value={nicNo}
                        onChange={(e) => setNicNo(e.target.value)} 
                        title={inputTitles.username} 
                        required
                    />
                </div>
                <div className='input-box1'>
                    <input 
                        type="text" 
                        placeholder='Mobile Number' 
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)} 
                        title={inputTitles.mobileNumber} 
                        required
                    /> 
                </div>
                <div className='input-box1'>
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        title={inputTitles.password} 
                        required
                    />   
                </div>
                <div className='input-box1'>
                    <input 
                        type="password" 
                        placeholder='Confirm Password' 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        title={inputTitles.confirmPassword} 
                        required
                    />
                </div>
                <div className='button_group'>
                    <button type='submit' >Sign Up</button>
                    <button type='button' onClick={goBack}>Back</button>
                </div>
                <div className="login-link">
                    <p>Already Registered  <a href='./login'>Login</a></p>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default SignupForm;