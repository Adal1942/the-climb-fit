import '../App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Join() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmaiMessage', 'template_hzstjzl', form.current, 'FSQMhs654X84m_Z_d')
        .then((result) => {
            alert('Cadastro feito com sucesso! :)');
         }, (error) => {
            console.log(error.text);
         });
         e.target.reset();
    };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
        <hr />
            <div>
                <span className="stroke-text">PRONTO</span>
                <span>PARA</span>
            </div>
            <div>
                <span>EVOLUIR</span>
                <span className="stroke-text">CONOSCO?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder="Insira o seu email" />
                <button className="btn btn-j">Se Inscrever</button>
            </form>
        </div>
    </div>
  )
}

export default Join