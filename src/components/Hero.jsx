import '../App.css';
import Header from '../components/Header'
import React from 'react';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Calories from '../assets/calories.png';
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {

  const transition = {type: 'spring', duration : 3};
  const mobile = window.innerWidth<=768 ? true: false;    

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          
          <div className="the-best-ad">
            <motion.div className="fluid" initial={{left: mobile? "140px": "190px"}} whileInView={{left: '8px'}} transition={{...transition, type: 'tween'}}>

            </motion.div>
            <span className="best">a melhor academia da cidade</span>
          </div>
          
          <div className="hero-text">
            <div>
              <span>Forme </span>
              <span>o seu</span>
            </div>
            <div>
              <span className="stroke-text">Corpo Ideal</span>
            </div>
            <div>
             <span>Aqui vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo</span> 
            </div>
          </div>

          <div className="figures">
            <div>
              <span>
              <NumberCounter start={50} end={70} delay={4} preFix="+"/>
              </span>
              <span>Coaches</span>
            </div>
            <div>
              <span>
              <NumberCounter start={400} end={439} delay={4} preFix="+"/></span>
              <span>Membros Novos</span>
            </div>
            <div>
              <span><NumberCounter start={10} end={35} delay={4} preFix="+"/></span>
              <span>Programas fitness</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn">Se Inscrever</button>
            <button className="btn">Saber Mais</button>
          </div>

        </div>
        
        <div className="right-h">
          <button className="btn">Se Inscrever</button>

          <motion.div initial={{ right: "-1rem" }} whileInView={{ right: "4rem" }} transition={transition} className="heart-rate">
            <div className='heart'></div>
            <span>Batimentos</span>
            <span><NumberCounter start={100} end={116} delay={100} postFix="bpm"/></span>
          </motion.div>

          <img src={hero_image} className="hero-image" alt=""/>
          <motion.img src={hero_image_back} className="hero-image-back" initial={{ right: '11rem' }} whileInView={{ right: '20rem' }} transition={transition} alt=""/>

          <motion.div className="calories" initial={{ right: "37rem" }} whileInView={{ right: "28rem"}} transition={transition}>
            <img src={Calories} alt=""/>
            <div>
              <span>Calorias Queimadas</span>
              <span>220 Kcal</span>
            </div>
          </motion.div>

        </div>
    </div>
  )
}

export default Hero