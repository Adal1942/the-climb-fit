import '../App.css';
import React from 'react'
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Logo from '../assets/logo.png';

function Footer() {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <a href='https://github.com/Adal1942'><img src={Github} alt=""/></a>
                <a href='https://www.instagram.com/adal.1942/'><img src={Instagram} alt=""/></a>
                <a href='https://www.linkedin.com/in/adauto-goncalves/'><img src={LinkedIn} alt=""/></a>
            </div> 
            <div className="logo-f">
                <img src={Logo} alt=""/>
            </div> 
        </div>  

        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
    
  )
}

export default Footer