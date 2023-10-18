import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="container_header">

    <div className="header">
      <div className="logo-header">
        <h2>LA</h2>
        <img src="/public/logo/logo.png" alt="logo_empresarial" />
        <h2>CART</h2>
      </div>

      <input type="checkbox" name="menu-hamburguesa" id="menu-hamburguesa" />
      <label htmlFor="menu-hamburguesa">
        <i class="bi bi-list"></i>
      </label>
      
      <nav className="nav_header">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">SOBRE LA EMPRESA</a>
        </li>
        <li>
          <a href="#">INVENTARIO</a>
        </li>
        <li>
          <a href="#">GESTORIA</a>
        </li>
        <li>
          <a href="#">SEGUROS</a>
        </li>
        <li>
          <a href="#">FINANCIACIÓN</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </nav>

      <div className="nav_iconos_redes">
        <li>
          <a href="#"><i class="bi bi-instagram"></i></a>
        </li>
        <li>
          <a href="#"><i class="bi bi-facebook"></i></a>
        </li>
        <li>
          <a href="#"><i class="bi bi-whatsapp"></i></a>
        </li>
      </div>

    </div>
    </div>
  );
};
