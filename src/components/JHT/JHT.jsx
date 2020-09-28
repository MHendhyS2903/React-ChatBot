import React from "react";

import "./JHT.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LearningOptions = (props) => {
  const options = [
    {
      text: "JHT",
      handler: props.actionProvider.handleJHT,
      id: 1,
    },
  ];

  // const handleFunction=()=>{
  //   props.actionProvider.handleJavascriptList;
  // }
  

  const optionsMarkup = options.map((option) => (
    <div className="card" key={option.id}>
        <div className="card-body">
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Masukan Jumlah Upah</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Masukan Jumlah Tahun</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Masukan Angka"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Masukan Saldo Awal</label>
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
                {/* <button 
                className="btn btn-outline-success"
                onClick={props.actionProvider.handleJavascriptList}>Ke Menu Awal</button> */}
                {/* <button type="button" className="btn btn-success" onClick={props.actionProvider.handleJavascriptList}>Hitung</button> */}
        </div>
    </div>
    
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
};

export default LearningOptions;
