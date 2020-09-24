import React from "react";

import "./InfoProgram.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Program JHT",
      handler: props.actionProvider.handleInfoJHT,
      id: 1,
    },
    { text: "Program JP", 
      handler: props.actionProvider.handleDaftarPerusahaan,
      id: 2 
    },
    { text: "Program JKK", 
      handler: props.actionProvider.handleDaftarTenaga,
      id: 3 
    },
    { text: "Program JKM", 
      handler: props.actionProvider.handleKetidaksesuaian,
      id: 4
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
