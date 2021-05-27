/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="flex">
          <li className="flex-1 mr-2">
            <a
              className="font-bold  text-center block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#about"
            >
              Sobre mi
            </a>
          </li>

          <li className="flex-1 mr-2">
            <a
              className="font-bold  text-center block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="font-bold  text-center block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#estudios"
            >
              Formación
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="font-bold  italic text-center block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#experiencia"
            >
              Experiencia
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
