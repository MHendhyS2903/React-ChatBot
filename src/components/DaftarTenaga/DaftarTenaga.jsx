import React from "react";

import "./DaftarTenaga.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "JHP ",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
  ];
  

  const optionsMarkup = options.map((option) => (
    <div className="card">
        <div className="card-body">
                <div className="form-group">
                    <label for="formGroupExampleInput">Masukkan Nama Tenaga Kerja</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlfor="formGroupExampleInput">Masukkan Alamat Tenaga Kerja</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlfor="formGroupExampleInput">Masukkan No Telp Tenaga Kerja</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlfor="formGroupExampleInput">Masukkan Estimasi Jumlah Tenaga Kerja</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <button 
                className="btn btn-success back"
                onClick={props.actionProvider.handleJavascriptList}>
                  Ke Menu Awal
                </button>

                <button
                className="btn btn-success"
                key={option.id}>
                  Hitung
                </button>
        </div>
    </div>
    
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default LearningOptions;
