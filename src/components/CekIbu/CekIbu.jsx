import React from "react";

import "./CekIbu.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "KPJ",
      handler: props.actionProvider.handleKPJ,
      id: 1,
    },
  ];
  

  const optionsMarkup = options.map((option) => (
    <div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Masukan Nama Ibu Kandung</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Nama"></input>
                </div>
                <button 
                className="btn btn-outline-success"
                onClick={option.handler}>Ke Menu Awal</button>
                <button 
                className="btn btn-success"
                onClick={option.handler}>Cek Status Klaim</button>
            </form>
        </div>
    </div>
    
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default LearningOptions;
