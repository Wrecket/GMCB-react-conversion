import React from 'react';
import './Navbar.css'
import logo from '../media/gmcbmainbig.png'
import banner from '../media/bannerspoon.jpg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <div className="Navbar">
           <nav className="navbar font navbar-expand-lg navbar-light">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </nav>
        <div className="container-fluid navbar__banner m-0 p-0">
            <img className="navbar__banner-img" src={banner} alt="banner"/>
        </div>
        </div>
     );
}
 
export default Navbar;