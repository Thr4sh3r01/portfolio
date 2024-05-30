import React from "react";
import "./HomePage.css";
import foto from "../../assets/foto.png";

const HomePage = () => {
  return (
    <>
      <header className="cabecera">
        <h3>
          <span className="Logo">&lt; FSD / &gt;</span> José Luis Rodríguez
        </h3>
        <ul className="contenedor1">
          <li>Home</li>
          <li>Blogs</li>
          <li>
            <input
              type="search"
              className="search-box"
              placeholder="Buscar"
            ></input>
          </li>
          <li>Instagram</li>
          <li>Discord</li>
          <li>GitHub</li>
        </ul>
      </header>
      <hr></hr>
      <h1 className="titulo">FULLSTACK DEVELOPER</h1>
      <main className="centro-main">
        <div>
          <img className="mifoto" src={foto} />
        </div>
        <div className="presentacion">
          <span id="etiqueta1">&lt;h2&gt;</span>
          <h2>hey</h2>
          <h2>I'm José Luis,</h2>
          <h2>Full-Stack Developer</h2>
          <span id="etiqueta2">&lt;h2/&gt;</span>
        </div>
        <div className="skills">
          <ul>
            <li>4 programing language</li>
            <li>6 Development Tools</li>
            <li>8 years of experience</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HomePage;
