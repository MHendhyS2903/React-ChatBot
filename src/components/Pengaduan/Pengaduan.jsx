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
