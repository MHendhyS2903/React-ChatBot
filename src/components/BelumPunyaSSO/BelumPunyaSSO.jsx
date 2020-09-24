import React from "react";

import "./BelumPunyaSSO.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Registrasi",
      handler: props.actionProvider.handleRegistrasi,
      id: 1,
    },
    { text: "Tanpa Registrasi",
      handler: props.actionProvider.handleTanpaRegistrasi,
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
