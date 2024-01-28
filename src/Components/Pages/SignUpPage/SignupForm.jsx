import React from 'react';
import '../Body.css';
import './SignupForm.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';


const SignupForm = () => {

    const navigate = useNavigate();

    const [selectedRole, setSelectedRole] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const roles = ['Admin', 'HouseOwner'];

    //Instructions object mapping each role to specific instructions
    const roleInstructions = {
        Admin: {
            name: 'Enter your full name',
            username: 'Use your work id number as your username',
            mobileNumber:'Enter your mobile number',
            password:'At least 12 characters long',
            confirmPassword: 'Re-enter your password'
        },
        // 'Vehicle': {
        //     name: 'Enter the vehicle number',
        //     username: 'Use the vehicle number as your username',
        //     mobileNumber:'Enter your mobile number',
        //     password:'At least 12 characters long',
        //     confirmPassword: 'Re-enter your password'
        // },
        'HouseOwner': {
            name: 'Enter your full name',
            username: 'Use your e-mail as your username',
            mobileNumber:'Enter your mobile number',
            password:'At least 12 characters long',
            confirmPassword: 'Re-enter your password'
        }
    };

    const [inputTitles, setInputTitles] = useState(roleInstructions[selectedRole] || {}); //Default to Admin instructions

    useEffect(() => {
        const newInputTitles = roleInstructions[selectedRole] || {};
        console.log('New Input Titles:', newInputTitles);
        setInputTitles(newInputTitles);
      }, [selectedRole]);
    

    //Validate the signup form

    const validateForm = () => {
        if(!selectedRole || !name || !username || !mobileNumber || !password || !confirmPassword){
            alert('Please fill in all fields');
            return false;
        }

        switch(selectedRole){
            case 'Admin':
                if(!/^[A-Z]\d{4}$/.test(username)){
                    alert('Invalid type of username');
                    return false;
                }
                break;
            // case 'Vehicle':
            //     if(!/^[A-Z]{2,3}-\d{4}$/.test(username)){
            //         alert('Invalid type of username');
            //         return false;
            //     }
            //     break;

            case 'HouseOwner':
                if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)){
                    alert('Enter your valid e-mail address.');
                    return false;
                }
                break;
        }

        //Password confirmation

        if(password !== confirmPassword){
            alert('Password do not match.');
            return false;
        }

        return true;
    };

    const handleSignup = () => {
        //Validation checks before making the signup request
        if(validateForm()){
            console.log('Selected Role:', selectedRole);
            console.log('Name:', name);
            console.log('Username:', username);
            console.log('Mobile Number:', mobileNumber);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
        }
    };

    const goBack = () => {
        //Navigate back to the home page
        navigate('/');
    };


    return (
        <div>
            <Sidebar />
        <div className='body'>
            <div className='container'>
            
            <form onSubmit={handleSignup}>
                <h1>
                    Sign Up
                </h1>
                <div className='dropdown'>
                <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        <option value="" className='role-list' disabled>Select your role</option>
                        {roles.map((role) => (
                        <option key={role} value={role} className='role-list'>{role}</option>
                    ))}
                </select>
                
                </div>
                <div className='input-box1'>
                    <input 
                        type="text" 
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        title={inputTitles.name} 
                        required
                    />   
                </div>
                <div className='input-box1'>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
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