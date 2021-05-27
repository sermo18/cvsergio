import React, { Component } from "react";

import "react-sweet-progress/lib/style.css";
class Experiencia extends Component {
  render() {
    return (
      <div className="skills container p-12 mx-auto" id="experiencia">
        <h1 className="text-black italic text-4xl p-2">Experiencia</h1>
        <div className="grid grid-cols-2 gap-4 p-12 sm:grid-cols-1">
          {this.props.experiencia.map((experiencia, i) => (
            <div key={i} className=" experienceCard p-4">
              <div className="containerCard">
                <div >
                  <h4>
                    <b>{experiencia.centro}</b>
                  </h4>
                  <h4>
                    <b>{experiencia.empleo}</b>
                  </h4>
                  <h3>
                    {experiencia.fechaEntrada}
                    {" - "}
                    {experiencia.fechaSalida}
                  </h3>
                  <h3>{experiencia.jornada}</h3>
                  <h3>{experiencia.ubicacion}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experiencia;
