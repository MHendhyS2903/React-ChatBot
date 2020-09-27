import React from "react";

import "./InfoJP.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Ke Menu Awal",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
  ];
  

  const optionsMarkup = options.map((option) => (
    // <li key={option.id} className="link-list-item">
      <button
      className="learning-option-button btn btn-outline-success"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
    // </li>
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default LearningOptions;
