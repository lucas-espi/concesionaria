import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container_header bg-secondary ">

    <div className="header ">
      <div className="logo-header ">
        <h2>LA</h2>
        <img src="/logo/logo.png" alt="logo_empresarial" />
        <h2>CART</h2>
      </div>

      <input type="checkbox" name="menu-hamburguesa" id="menu-hamburguesa" />
      <label htmlFor="menu-hamburguesa">
        <i className="bi bi-list text-light"></i>
      </label>
      
      <nav className="nav_header ">
        <li>
          <Link to="/" className="text-light">HOME</Link>
        </li>
        <li>
          <Link to="/empresa" className="text-light">SOBRE LA EMPRESA</Link>
        </li>
        <li>
          <Link to="/vehiculos" className="text-light">INVENTARIO</Link>
        </li>
        <li>
          <Link to="/gestoria" className="text-light">GESTORIA</Link>
        </li>
        <li>
          <Link to="/seguros" className="text-light">SEGUROS</Link>
        </li>
        <li>
          <Link to="/financiacion" className="text-light">FINANCIACIÓN</Link>
        </li>
        <li>
          <Link to="/contacto" className="text-light">CONTACTO</Link>
        </li>
      </nav>

      <div className="nav_iconos_redes">
        <li>
          <a href="#"><i className="bi bi-instagram text-light"></i></a>
        </li>
        <li>
          <a href="#"><i className="bi bi-facebook text-light"></i></a>
        </li>
        <li>
          <a href="#"><i className="bi bi-whatsapp text-light"></i></a>
        </li>
      </div>

    </div>
    </div>
  );
};
