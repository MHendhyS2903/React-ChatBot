import React from "react";

import "./KPJ.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "CekIbu",
      handler: props.actionProvider.handleCekIbu,
      id: 1,
    },
  ];
  

  const optionsMarkup = options.map((option) => (
    <div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Masukan Nomor Peserta (KPJ)</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <button 
                className="btn btn-success"
                onClick={option.handler}>Lanjut</button>
            </form>
        </div>
    </div>
    
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default LearningOptions;
