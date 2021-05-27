import React, { Component } from "react";
import logo from "../assets/img/img-cv.jpg";
// Componentes
import Header from "./header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Estudios from "./Estudios";
import Experiencia from "./Experiencia";
import datos from "./datos.json";

// function holaMundo(nombre){
//   var presentacion = ( <h2> Hola me llamo {nombre}</h2>);
//   return presentacion;
// }

class Main extends Component {
  constructor() {
    super();

    this.state = { datos };
  }

  render() {
    // Web Developer - Vue.js, JavaScript, Node.js, TypeScript, PHP, SQL, PL/SQL, MySQL, Mariadb, Java, Spring boot, Prometheus, Laravel, WordPress, HTML, CSS, Bootstrap, Vuetify, Docker, GitLab.
    return (
      <div className="App">
        <header className="App-header py-5">
          <div>
            <img src={logo} className="App-logo rounded-full " alt="logo" />
            <h1 className="italic text-3xl">
              Sergio <strong> Moreno </strong>
            </h1>
            <h3 className="italic text-1xl pt-1">Web Developer</h3>
          </div>

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with React
        </a> */}
        </header>
        <section className="componentes">
          <Header />
          <AboutMe />
          <Skills skills={datos.skills} />
          <Estudios estudios={datos.estudios}></Estudios>
          <Experiencia experiencia={datos.experiencia}></Experiencia>
        </section>
      </div>
    );
  }
}
export default Main;
