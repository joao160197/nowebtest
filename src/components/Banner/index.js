import "./styles.css";
// import React, { useState } from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";

const Banner = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -20; // You can adjust this value if needed
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="container-about">
      <div className="content">
        <h1 className="title-about">
          ILUMINE O SEU <br /> DIA A DIA!
        </h1>
        <p className="Paragrafo">
          Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a
          dia! Temos produtos para toda sua casa com a melhor qualidade e
          atendimento da região!
        </p>
        <button className="button1">VEJA NOSSOS PRODUTOS </button>
        <br /> <br />
        <button className="button2">NÓS CONHEÇA MELHOR</button>
        <p
          className={`SeeMore transition-scroll`}
          onClick={() => scrollToSection("section-product")}
        >
          <AiOutlineArrowDown
            size={30}
            style={{ marginRight: "10px", verticalAlign: "middle" }}
          />
          Role para ver mais
        </p>
      </div>
    </div>
  );
};

export default Banner;
