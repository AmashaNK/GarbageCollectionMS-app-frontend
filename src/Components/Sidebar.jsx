import React, { Children, useState } from 'react'
import { FaTh,FaUserAlt,FaBars } from 'react-icons/fa';
import { IoNewspaper } from "react-icons/io5";
import { RiContactsFill,RiLoginCircleFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () =>setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/news",
            name:"News",
            icon:<IoNewspaper/>
        },
        {
            path:"/contact-us",
            name:"Contact Us",
            icon:<RiContactsFill />
        },
        {
            path:"/about-us",
            name:"About Us",
            icon:<FaUserAlt/>
        },
        {
            path:"/login",
            name:"Login",
            icon:<RiLoginCircleFill/>
        }
    ]
    return (
        <div className='container1'>
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top-section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "80px" : "0px"}}className="bars">
                        <FaBars className='menu-button' onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink> 
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar;