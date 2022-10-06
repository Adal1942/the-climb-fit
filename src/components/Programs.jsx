import '../App.css';
import React from 'react'
import {programsData} from '../data/programsData';
import RightArrow from '../assets/rightArrow.png';

function Programs() {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore nossos</span>
            <span>Programas</span>
            <span className="stroke-text">para moldar você</span>
        </div>
        
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>SABER MAIS</span>
                        <img src={RightArrow} alt=""/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs