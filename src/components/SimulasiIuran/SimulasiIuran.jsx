import React from "react";

import "./SimulasiIuran.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "PU",
      handler: props.actionProvider.handlePU,
      id: 1,
    },
    { text: "BPU", 
      handler: props.actionProvider.handleBPU,
      id: 2 
    },
    { text: "Jakon", 
      handler: props.actionProvider.handleJakon,
      id: 3 
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
