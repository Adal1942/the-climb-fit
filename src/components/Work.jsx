import '../App.css';
import Logo from '../assets/logo.png';
import warning from '../assets/work-1.png';
import { Link } from 'react-router-dom';
import React from 'react';

function Work() {

  return (
    <div className="Work" id='work'>
        <div className='header-2'>
            <img src={Logo} className="logo-2" alt=""/>
        </div>

        <div className='Work-2'>
            <img src={warning} className="warning" alt=""/>
        </div>

        <div>
            <Link to='/'><button className="btn">Voltar</button></Link>
        </div>

        <div>
            <span>Página em construção</span>
        </div>
    </div>
  )
}

export default Work;