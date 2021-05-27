import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me  container p-12 mt-12 mx-auto" id="about">
        <h1 className="text-black italic text-4xl p-2" >Sobre mi</h1>
        <p className="italic text-1xl p-2 p-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3 className="text-black italic text-3xl p-2">Contáctame</h3>
        <div>
          <p className="italic text-1xl p-2">
            <strong className="mr-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" />
              </svg>{" "}
              Email:{" "}
            </strong>{" "}
            sermo14.sm@gmail.com
          </p>
        </div>
        <div>
          <p className="italic text-1xl p-2">
            <strong className="mr-2 ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>{" "}
              Number:{" "}
            </strong>
            658064731
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
