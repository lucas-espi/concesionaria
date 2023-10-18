import React from "react";
import "./gestoria-seguros.css"
import { Marcas } from "./slider";

export const GestoriaHome = () =>{
    return(
        <>
        <div className="sec1-2 container d-flex flex-column flex-md-row flex-lg-row justify-content-center ">
          <div className="card m-2 col-md-5 col-12 shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-info">Seguros</h4>
              <p className="card-text text-secondary">Comprando o no tu auto con nosotros, acá te brindamos el seguro ideal.</p>
              <a href="#" className="btn btn-info text-white">Más info</a>
            </div>
          </div>
          <div className="card m-2 col-md-5 col-12 shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-info">Gestoría del automotor</h4>
              <p className="card-text text-secondary">Cédula verde, registro del automotor, transferencias. Comprás y lo pasás a buscar.</p>
              <a href="#" className="btn btn-info text-white">Más info</a>
            </div>
          </div>
        </div>
        <Marcas/>
        <div className="sec2-2 container d-flex flex-column justify-content-center align-items-center mt-4">
          <h3 className="text-success mb-4 text-center">POR QUE ELEGIR LA CART</h3>
          <div class="card-deck d-flex flex-column flex-md-row flex-lg-row justify-content-center">
             <div class="card col-md-4 col-12 m-2  shadow-sm">
               <div class="card-body ">
                 <h4 class="card-title text-success"><i className="bi bi-currency-dollar"></i> EL MEJOR PRECIO</h4>
                 <p class="card-text text-secondary">Relación Calidad-Precio, nuestros autos pasan por extensos controles, compra 100% asegurada.</p>
               </div>
             </div>
             <div class="card col-md-4 col-12 m-2 shadow-sm">
               <div class="card-body">
                 <h4 class="card-title text-success"><i className="bi bi-calculator"></i> LAS MEJORES OPCIONES DE FINANCIACIÓN</h4>
                 <p class="card-text text-secondary">Podés pagar de la forma más cómoda, te brindamos opciones para que logres llevarte el auto que querés.</p>
               </div>
             </div>
             <div class="card col-md-4 col-12 m-2 shadow-sm">
               <div class="card-body">
                 <h4 class="card-title text-success"><i className="bi bi-car-front"></i> SIN VUELTAS</h4>
                 <p class="card-text text-secondary">Llevate el auto en pocos días.</p>
               </div>
              </div>
            </div>
        </div>
        </>
    )
};