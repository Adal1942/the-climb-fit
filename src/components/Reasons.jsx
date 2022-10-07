import '../App.css';
import React from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import umbro from "../assets/umbro.png";
import asics from "../assets/asics.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span className="some">ALGUMAS RAZÕES</span>

            <div>
                <span className="stroke-text">para</span>
                <span> nos escolher</span>
            </div>

            <div className="details-r">
                <div>
                    <img src={tick} alt=""/>
                    <span>MAIS DE 70 TREINADORES ESPECIALIZADOS</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>TREINO MAIS INTELIGENTE E RÁPIDO DO QUE ANTES</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>1 PROGRAMA GRATUITO PARA NOVOS MEMBROS</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>PARCEIROS CONFIÁVEIS</span>
                </div>
            </div>

            <span style={{color: "var(--gray", fontWeight: "normal",}}>NOSSOS PARCEIROS</span>

            <div className="partners">
                <img src={umbro} alt=""/>
                <img src={asics} alt=""/>
                <img src={adidas} alt=""/>
                <img src={nike} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Reasons