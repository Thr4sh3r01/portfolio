import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <header className="cabecera">
        <h3>
          <span className="Logo">&lt; C / &gt;</span> José Luis Rodríguez
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
    </>
  );
};

export default HomePage;
