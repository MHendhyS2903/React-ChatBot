import React from "react";

import "./ListCekSaldo.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Sudah Punya Akun SSO",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Belum Punya Akun SSO",
      handler: props.actionProvider.handleBelumPunyaSSO,
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
