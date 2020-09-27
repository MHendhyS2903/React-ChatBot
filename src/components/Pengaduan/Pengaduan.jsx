import React from "react";

import "./Pengaduan.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Reset Akun BPJSku",
      handler: props.actionProvider.handleResetAkun,
      id: 1,
    },
    { text: "Perusahaan Belum Terdaftar", 
      handler: props.actionProvider.handleDaftarPerusahaan,
      id: 2 
    },
    { text: "Tenaga Kerja Belum Terdaftar", 
      handler: props.actionProvider.handleDaftarTenaga,
      id: 3 
    },
    { text: "Ketidaksesuain Data", 
      handler: props.actionProvider.handleKetidaksesuaian,
      id: 4
    },
    { text: "Akun SIPP", 
      handler: props.actionProvider.handleAkunSIPP,
      id: 5
    },
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
          Pengaduan
        </text>
      </li>
      {optionsMarkup}
    </ul>
  );
};

export default LearningOptions;
