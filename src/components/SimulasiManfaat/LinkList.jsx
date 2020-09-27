import React from "react";

import "./LinkList.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "JHT",
      handler: props.actionProvider.handleJHT,
      id: 1,
    },
    { text: "JHP", 
      handler: props.actionProvider.handleJHP,
      id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <li key={option.id} className="link-list-item">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <text
      style={{
        backgroundColor: "#F8F8F8",
      }}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
        <i className="fa fa-angle-right"></i>
      </text>
    </li>
  ));

  return (
    <ul className="link-list">
      <li className="link-list-item">
        <text
          style={{
            backgroundColor: "#fff",
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="link-list-item-url head"
        >
          Simulasi Manfat
        </text>
      </li>
      {optionsMarkup}
    </ul>
  );
};

export default LearningOptions;
