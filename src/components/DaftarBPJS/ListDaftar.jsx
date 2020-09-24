import React from "react";

import "./ListDaftar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Tata Cara Pendaftaran",
      handler: props.actionProvider.handleSyarat,
      id: 1,
    },
    { text: "Syarat Pendaftaran",
      handler: props.actionProvider.handleSyarat,
      id: 2 },
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
