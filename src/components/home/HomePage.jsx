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
          <li>
            Instagram
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#12F7D6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </li>
          <li>
            Discord
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#12F7D6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
          </li>
          <li>
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#12F7D6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </li>
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
          <h2>I´m José Luis,</h2>
          <h2>Full-Stack Developer</h2>
          <span id="etiqueta2">&lt;h2/&gt;</span>
          <span id="etiqueta1">&lt;p&gt;</span>
          <p>
            I help business grow by crafting amazing web experiences. If you’re
            looking for a developer that likes to get stuff done,
          </p>
          <span id="etiqueta2">&lt;p/&gt;</span>
          <p className="talk">
            Let´s Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="talk-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#12F7D6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </p>
        </div>
        <div className="skills-card">
          <h1>4</h1>
          <h2>Lenguajes de Programación</h2>
          <h1>6</h1>
          <h2>Herramientas de Desarrollo</h2>
          <h1>8</h1>
          <h2>Años de Experiencia</h2>
        </div>
      </main>
    </>
  );
};

export default HomePage;
