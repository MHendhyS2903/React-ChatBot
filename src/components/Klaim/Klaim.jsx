import React from "react";

import "./Klaim.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Cek Status Klaim",
      handler: props.actionProvider.handleCekStatus,
      id: 1,
    },
    { text: "Informasi Tentang Antrian", 
      handler: props.actionProvider.handleInformasiAntrian,
      id: 2 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <li key={option.id} className="link-list-item">
      <button
      className="learning-option-button btn btn-light text-left"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
    </li>
    
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default LearningOptions;
