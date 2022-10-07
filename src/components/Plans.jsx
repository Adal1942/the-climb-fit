import '../App.css';
import {plansData} from '../data/plansData';
import whiteTick  from '../assets/whiteTick.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <div className="plans-container" id="plans">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className="stroke-text">PRONTO PARA</span>
            <span>COMEÇAR SUA</span>
            <span className="stroke-text">JORNADA CONOSCO?</span>
        </div>

        <div className="plans">
            {plansData.map((plan, i)=> (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>R$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=> (
                            <div className="feature">
                                <img src={whiteTick} alt=""/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                            <span>Veja mais benefícios</span>
                    </div>

                    <button className="btn"><Link to='/work' className='link'>Se Inscrever</Link></button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans