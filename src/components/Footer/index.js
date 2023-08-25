import React from 'react';
import './styles.css'; // Make sure to import your stylesheet
import {BsFacebook} from "react-icons/bs"
import {AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
             <img
          className="c-logo-footer"
          src="https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2FFrame%20(1).png?alt=media&token=08e7d517-3abc-4c8a-a65f-d4226c717d5b"
          alt="Logo"
        />
        <p className='footer-text'>Venha na Elétrica J. Santos e garanta a melhor <br/> opção para sua casa !</p>
          </div>
          <div className="media-icons">
            <div className='social-text'>
              <h1 className='Fallow'>NOS SIGA NAS REDES</h1>
            </div>
            <div className="social-icons">
              <a href="https://www.whatsapp.com//"><AiOutlineWhatsApp size={30} /></a>
              <a href="https://www.instagram.com//"><AiOutlineInstagram size={30} /></a>
              <a href="https://pt-br.facebook.com//"><BsFacebook size={30} /></a>
            </div>
        </div>
        </div>
       
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="opyright_text">
          <span className="copyright_text">Copyright © 2023 Elétrica J.Santos - Todos os direitos reservados</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


