import React from 'react';
import { Link } from 'react-router-dom'; 
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src="/Logo.png" alt="Logo" />
            <div>
            <img className='profile' src="/Profile.png" alt="Profile" />
            <Link to="/login" className='login-link'>Login</Link> 
            </div>
        </div>
    );
}

export default Navbar;
