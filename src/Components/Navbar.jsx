import React  from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return(
        <nav>
            
            <ul>
                <li>
                    <Link to ="/" className='title'>Home</Link>
                </li>
                <li>
                    <Link to ="/news">News</Link>
                </li>
                <li>
                    <Link to ="/contact-us">Contact Us</Link>
                </li>
                <li>
                    <Link to ="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to ="/login">Login</Link>
                </li>
                <li>
                    <Link to ="/signup"></Link>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar;