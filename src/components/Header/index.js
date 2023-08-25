import React, { useState, useRef } from "react"; // Import useRef

import "./styles.css";

function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const modalTimeoutRef = useRef(null);

  const openModal = () => {
    clearTimeout(modalTimeoutRef.current);
    setModalVisible(true);
  };

  const closeModal = () => {
    modalTimeoutRef.current = setTimeout(() => {
      setModalVisible(false);
    }, 5000);
  };

  const toggleModal = () => {
    if (modalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  
  // Mapeie as categorias para os URLs das imagens correspondentes
  const categoryImages = {
    Lampadas:
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2Fluz.png?alt=media&token=f7669d4d-0f28-4526-aaa5-bd32c1f909c8",
    Lustres:
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2FGroup%2057.png?alt=media&token=72c6baaa-4b38-4e3d-aa11-335105ca5ae9",
    Luminarias:
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2Flampada.png?alt=media&token=1140656f-62c8-4368-8010-6d8b77ca2ed7",
    Decoração:
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2FGroup%2052.png?alt=media&token=73a95a93-d261-4c45-9b04-0e8b8228d7fc",
    Acessórios:
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2Fcoisa.png?alt=media&token=c788a3c8-520b-4e05-a53a-b46d0cd1430d",
    Ferramentas:
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2Fferramenta.png?alt=media&token=783eeecd-22e4-4102-b0e4-0ebb6a982dd6",
    "Utensílios Domesticos":
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2Fpanela.png?alt=media&token=1e9ebc16-75cd-484d-b007-0ec2715274d6",
    Cabos:
      "https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2FGroup%2055%20(1).png?alt=media&token=aa5625e6-f5b3-4af1-904e-c7ca295333e7",
  };

  return (
    <div className="header-container">
      <header className="c-header">
        <div className="c-container c-container-right">
          <ul className="c-nav">
            <li>Home</li>
            <li
              className="c-modal-trigger"
              onMouseEnter={openModal}
              onMouseLeave={closeModal}
              onClick={toggleModal} // Toggle the modal on click
            >
              Categorias
            </li>
            <li>Sobre</li>
            <li>Localização</li>
            <button className="c-modal-button">Contato</button>
          </ul>
          {modalVisible && (
            <div
              className="c-modal"
              onMouseEnter={openModal}
              onMouseLeave={closeModal}
            >
              <div className="c-modal-content">
                <span className="c-modal-close" onClick={closeModal}>
                  &times;
                </span>
                <ul className="c-modal-list">
                  {Object.keys(categoryImages).map((category) => (
                    <li key={category} className="c-modal-item">
                      <img src={categoryImages[category]} alt={category} />
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <img
          className="c-logo"
          src="https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/noweb%2FGroup%2014.png?alt=media&token=8bfcb399-8ff9-43dc-8290-7de64c52f2bc"
          alt="Logo"
        />
      </header>
    </div>
  );
}

export default Header;