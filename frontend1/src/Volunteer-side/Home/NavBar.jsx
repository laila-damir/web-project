import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ openNav, nav }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-items">
                <li><Link to="/home" className="navbar-links">Home</Link></li>
                <li><Link to="/jobs" className="navbar-links">Search Jobs</Link></li>
                <li><Link to="/UploadResume" className="navbar-links">Upload Resume</Link></li>
                <li><Link to="/contact" className="navbar-links">Contact us</Link></li>
                <li>
                    <Link to="/login" className="navbar-links">
                        <button className="login-button">Login</button>
                    </Link>
                </li>
                <div className="nav-login-cart">
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                </div>
            </ul>

            <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-navbar-close">
                    <FontAwesomeIcon icon={faTimes} className="hamb-icon" />
                </div>
                <ul className="mobile-navbar-links">
                    <li><Link onClick={openNav} to="/home">Home</Link></li>
                    <li><Link onClick={openNav} to="/jobs">Jobs</Link></li>
                    <li><Link onClick={openNav} to="/UploadResume">Upload Resume</Link></li>
                    <li><Link onClick={openNav} to="/contact">Contact us</Link></li>
                    <li>
                        <Link onClick={openNav} to="/login">{isLoggedIn ? 'Logout' : 'Login'}</Link>
                    </li>
                </ul>
            </div>
            <div className="mobile-nav">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={openNav}
                    className="hamb-icon"
                />
            </div>
        </div>
    );
}

export default Navbar;
