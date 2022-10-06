import '../App.css';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { photosData } from '../data/photosData';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

function Images() {

    const [selected, setSelected] = useState(0);
    const tLength = photosData.length;

    const transition = {type: 'spring', duration : 3}

  return (
    <div className="Photos" id="photos">
        <div className='photos-header'>
            <span className="stroke-text">Conheça</span>
            <span> nosso</span>
            <span className="stroke-text"> espaço</span>
        </div>
        <div className="bottom-i">
            <motion.div initial={{ opacity: 0, x: -50 }} transition={{ ...transition, duration: 1 }} whileInView={{ opacity: 1, x: 0}}></motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} transition={{ ...transition, duration: 1 }} whileInView={{ opacity: 1, x: 0}}></motion.div>
            <motion.img src={photosData[selected].image} key={selected} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={transition}/>
        </div>
        <div className="arrows-i">
            <img onClick={() => { selected === 0 ? setSelected(tLength -1) : setSelected((prev)=> prev -1)}} src={leftArrow} alt=""/>
            <img onClick={() => { selected === tLength -1 ? setSelected(0) : setSelected((prev)=> prev +1)}} src={rightArrow} alt=""/>
        </div>
    </div>
  )
}

export default Images