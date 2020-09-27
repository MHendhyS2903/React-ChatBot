import React from "react";

import "./Ketidaksesuaian.css";
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
                    <label htmlfor="formGroupExampleInput">Masukkan NIK</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlfor="formGroupExampleInput">Masukkan Nomor Peserta (KPJ)</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlfor="formGroupExampleInput">Masukkan Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlfor="formGroupExampleInput">Masukkan No HP</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlfor="formGroupExampleInput">Masukkan Alasan Ketidaksesuaian Data</label>
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
