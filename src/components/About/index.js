import React from 'react';
import './styles.css';

const About = () => {
  return (
    <div className="container-about2">
      <div className="image-container">
      <div className="title-about2"><h1>SUA MELHOR OPÇÃO</h1></div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2FGroup%2065.png?alt=media&token=e199d893-4bed-4d79-ab84-7293ad9de848"
          alt="Imagem Sobre"
          className="sobre-imagem"
        />
      </div>
<div className="text-container">
       
        <p className="Paragrafo2">
          Desde 1970 somos especializados em materiais elétricos, sendo uma das
          principais distribuidoras do setor. Oferecemos os melhores produtos,
          com o preço que cabe no seu bolso e atende todas as necessidades do
          seu dia a dia. Aqui você irá encontrar lustres, luminárias, utilidades
          domésticas, ferramentas, acessórios, lâmpadas, fios e cabos, quadros
          de distribuição, caixas de entrada padrão Eletropaulo, materiais
          elétricos em geral, equipamentos de segurança e comunicação.
        </p>
        <button className="button3">SAIBA MAIS SOBRE NÓS </button>
      </div>
    </div>
  );
};

export default About;
