import React from "react";

import "./DaftarPerusahaan.css";
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
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Masukkan Nama Perusahaans</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput">Masukkan Alamat Perusahaan</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput">Masukkan No Telp Perusahaan</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput">Masukkan Estimasi Jumlah Tenaga Kerja</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <button 
                className="btn btn-outline-success"
                onClick={option.handler}>Ke Menu Awal</button>
                <button type="button" className="btn btn-success">Laporkan</button>
            </form>
        </div>
    </div>
    
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default LearningOptions;
