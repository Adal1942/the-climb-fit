import '../App.css';
import Header from '../components/Header'
import React from 'react';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
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
            <motion.div className="fluid" initial={{left: mobile? "165px": "238px"}} whileInView={{left: '8px'}} transition={{...transition, type: 'tween'}}>

            </motion.div>
            <span className="best">the best fitness club in the town</span>
          </div>
          
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
             <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span> 
            </div>
          </div>

          <div className="figures">
            <div>
              <span>
              <NumberCounter start={100} end={140} delay={4} preFix="+"/>
              </span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>
              <NumberCounter start={800} end={978} delay={4} preFix="+"/></span>
              <span>Members Joined</span>
            </div>
            <div>
              <span><NumberCounter start={20} end={50} delay={4} preFix="+"/></span>
              <span>Fitness Programs</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>

        </div>
        
        <div className="right-h">
          <button className="btn">Join Now</button>

          <motion.div initial={{ right: "-1rem" }} whileInView={{ right: "4rem" }} transition={transition} className="heart-rate">
            <img src={Heart} alt=""/>
            <span>Heart Rate</span>
            <span><NumberCounter start={70} end={116} delay={20} postFix="bpm"/></span>
          </motion.div>

          <img src={hero_image} className="hero-image" alt=""/>
          <motion.img src={hero_image_back} className="hero-image-back" initial={{ right: '11rem' }} whileInView={{ right: '20rem' }} transition={transition} alt=""/>

          <motion.div className="calories" initial={{ right: "37rem "}} whileInView={{ right: "28rem"}} transition={transition}>
            <img src={Calories} alt=""/>
            <div>
              <span>Calories Burned</span>
              <span>220 Kcal</span>
            </div>
          </motion.div>

        </div>
    </div>
  )
}

export default Hero