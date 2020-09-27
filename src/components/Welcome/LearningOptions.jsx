import React from "react";

import "./LearningOptions.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "Info Program BPJamsostek",
      handler: props.actionProvider.handleInfoProgram,
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
    { text: "Cek Status Kepesertaan",
      handler: props.actionProvider.handleCekStatusKepesertaan,
      id: 5
    },
    { text: "Cek Saldo",
      handler: props.actionProvider.handleCekSaldo,
      id: 6
    },
    { text: "Pengaduan", 
      handler: props.actionProvider.handlePengaduan,
      id: 7
    },
    {
      text: "Program Vokasi",
      handler: props.actionProvider.handleKosong,
      id: 8,
    },
    { text: "Daftar Peserta BPJS Ketenagakerjaan",
      handler: props.actionProvider.handleDaftarBPJS,
      id: 9
    },
    {
      text: "Manfaat Layanan Tambahan",
      handler: props.actionProvider.handleKosong,
      id: 10,
    },
    {
      text: "Testimoni terkait pelayanan BPJS Jamsostek",
      handler: props.actionProvider.handleKosong,
      id: 11,
    },
    { text: "Kritik dan Saran",
      handler: props.actionProvider.handleKritikSaran,
      id: 12 },
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
          Menu Utama
        </text>
      </li>
      {optionsMarkup}
    </ul>
  );
};

export default LearningOptions;
