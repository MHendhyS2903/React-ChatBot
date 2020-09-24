import React from "react";

import "./TanpaRegistrasi.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const KPJ = (props) => {
  const options = [
    {
      text: "KPJ",
      handler: props.actionProvider.handleCekIbu,
      id: 1,
    },
  ];


  const optionsMarkup = options.map((option) => (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Masukan NIK</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
          </div>
          <button
            className="btn btn-success"
            key={option.id}
            onClick={option.handler}>Lanjut</button>
        </form>
      </div>
    </div>

  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default KPJ;
