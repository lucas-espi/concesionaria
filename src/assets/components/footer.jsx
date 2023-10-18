import React from "react";
import "./footer.css"

export const Footer = () => {
    return(
        <>
        <footer class="blockquote-footer text-light d-flex justify-content-center align-items-center bg-secondary footer">LA CART
            <cite title="Source Title"> Copyright © 2023 - Av Nazca 0000 - Flores</cite>
            <div className="nav_iconos_redes">
              <li>
                <a href="#"><i class="bi bi-instagram text-light"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-facebook text-light"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-whatsapp text-light"></i></a>
              </li>
            </div>
        </footer>
        </>
    )
}