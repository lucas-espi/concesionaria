import React from "react";
import './contacto.css'

export const Contacto = () => {
    return(
        <>
        <section className="container-contacto mb-5">
            <div className="box-t bg-info">
                <h1 className="title-empresa   text-white">CONTACTO</h1>
            </div>

            <div className="box-contacto container box-title-gestoria col-12 pb-5">
                <h2 className=" mb-5 text-center">Contactanos por planes de financiación, novedades, vender tu auto.</h2>
                
                <div className="container d-flex flex-column flex-md-row flex-lg-row justify-content-center">
                    <div class="card col-12 col-md-4 m-1">
                        <div class="card-header">
                            <h4 class="card-title">CONTACTANOS DIRECTAMENTE</h4>
                        </div>
                        <div class="card-body"> 
                          <p class="card-text">ejemplo@la.cart.com.ar +54 9 11 0000000000</p>
                        </div>
                    </div>

                    <div class="card col-12 col-md-4 m-1 ">
                        <div class="card-header">
                            <h4 class="card-title">VISITANOS</h4>
                        </div>
                        <div class="card-body"> 
                          <p class="card-text"> Av Nazca 0000 - Flores.</p>
                        </div>
                    </div>

                    <div class="card col-12 col-md-4 m-1 ">
                        <div class="card-header">
                            <h4 class="card-title">HORARIOS</h4>
                        </div>
                        <div class="card-body"> 
                          <p class="card-text">Lunea a Viernes de 9 a 19:30 hs.</p>
                        </div>
                    </div>
                </div>
            </div>

            <form className="container d-flex flex-column align-items-center bg-light pb-5 pt-5">
                <h4 className=" col-10">DEJANOS TU CONSULTA, TE RESPONDEREMOS A LA BREVEDAD!</h4>
                <div class="form-group  col-10 d-flex flex-column flex-md-row mb-4 mt-4">
                    <input type="text" className="form-control m-1" id="formGroupExampleInput" placeholder="Nombre"/>
                    <input type="email" className="form-control m-1" id="inputEmail3" placeholder="tu-email@gmail.com"/>
                </div>
                <div class="mb-3 col-10 p-1">
                    <textarea class="form-control" id="#" rows="3" placeholder="Consulta..."></textarea>
                </div>
                <button type="button" className="btn-form btn btn-success w-50 ">Enviar</button>
            </form>
        </section>
        </>
    )
}