import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = [
      {
        nombre: "Pizza",
        ingredientes: ["Tomate", "Queso", "Jamon"],
        calorias: 500,
      },
    ];

    return (
      <div className="mi-componente">
        <h1>Componente nuevo</h1>
        <hr></hr>
        <h2 className="text-purple-600">{receta[0].nombre}</h2>
        <ol>
          {receta[0].ingredientes.map((ingrediente, i) => {
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default MiComponente;
