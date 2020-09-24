import React from "react";

import "./LearningOptions.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Info Program BPJamsostek",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Simulasi Manfaat", 
      handler: props.actionProvider.handleSimulasiManfaat,
      id: 2 
    },
    { text: "Simulasi Iuran", 
      handler: props.actionProvider.handleSimulasiIuran,
      id: 3 
    },
    { text: "Klaim", 
      handler: props.actionProvider.handleKlaim,
      id: 4
    },
    { text: "Cek Status Kepesertaan", handler: () => {}, id: 5 },
    { text: "Cek Saldo", handler: () => {}, id: 6 },
    { text: "Pengaduan", handler: () => {}, id: 7 },
    { text: "Program Vokasi", handler: () => {}, id: 8 },
    { text: "Daftar Peserta BPJS Ketenagakerjaan", handler: () => {}, id: 9 },
    { text: "Manfaat Layanan Tambahan", handler: () => {}, id: 10 },
    { text: "Testimoni terkait pelayanan BPJS Jamsostek", handler: () => {}, id: 11 },
    { text: "Kritik dan Saran", handler: () => {}, id: 12 },
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
