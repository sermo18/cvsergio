import React, { Component } from "react";

import "react-sweet-progress/lib/style.css";
class Estudios extends Component {
  render() {
    return (
      <div className="skills container p-12 mx-auto" id="estudios">
        <h1 className="text-black italic text-4xl p-2">Formación</h1>
        <div className="grid grid-cols-3 gap-4 p-12">
          {this.props.estudios.map((estudio, i) => (
            <div key={i} className=" card p-4">
              <div className="containerCard grid grid-cols-3">
                <div>
                  {(() => {
                    if (i === 0) {
                      return <div>  <img
                      src="https://pbs.twimg.com/profile_images/970744898629586944/iVpYx1JJ_400x400.jpg"
                      alt="Study Imagen"
                      className="w-20 imagenCard"
                    ></img></div>;
                    } else if (i === 1) {
                      return <div>  <img
                      src="https://media-exp1.licdn.com/dms/image/C4D0BAQEVDf_4g0uNyQ/company-logo_200_200/0/1519856473634?e=2159024400&v=beta&t=KpSCHPGu5rm_uBrsXsRveOw8L5c-JGAtFI6z8hPM2to"
                      alt="Study Imagen"
                      className="w-20 imagenCard"
                    ></img></div>;
                    } else {
                      return <div>  <img
                      src="data:image/jpeg;base64,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"
                      alt="Study Imagen"
                      className="w-20 imagenCard"
                    ></img></div>;
                    }
                  })()}
                
                </div>
                <div className="col-span-2">
                  <h4>
                    <b>{estudio.centro}</b>
                  </h4>
                  <h3>
                    {estudio.fechaEntrada}
                    {" - "}
                    {estudio.fechaSalida}
                  </h3>
                  <h3>{estudio.titulacion}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Estudios;
