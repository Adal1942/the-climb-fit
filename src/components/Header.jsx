import '../App.css';
import Logo from '../assets/logo.png';
import React from 'react';

function Header() {
  return (
    <div className="header">
        <img src={Logo} className="logo"/>

        <ul className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>  
  )
}

export default Header