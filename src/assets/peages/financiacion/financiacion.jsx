import React from "react";
import './financiacion.css'

export const Financiacion = () => {
    return(
        <>
        <section className="container-seguros">
            <div className="box-t bg-info">
                <h1 className="title-empresa   text-white">FINANCIACIÓN</h1>
            </div>

            <div className="container box-title-gestoria col-12 ">
                <h2 className=" mb-5">LLEVÁTE EL AUTO QUE QUIERAS.</h2>
                <ul className="list-group">
                    <li className="list-group-item border-0">Ofrecemos financiación bancaria.</li>
                </ul>

                <button type="button" className="btn btn-secondary mb-5">CONSULTANOS</button>
            </div>

            <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column flex-md-row col-10  mt-5 mb-5 pb-5">
                <div className=" col-10 col-sm-8 col-md-6">
                    <img src="https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
                </div>
                <div class="border-0 card col-12 col-sm-8 col-md-6 p-4 d-flex align-items-center text-start">
                    <div class="card-body ">
                        <h4 class="card-title">Préstamos prendarios</h4>
                    </div>
                        <ul class="list-group">
                            <li class="list-group-item border-0"><i className="bi bi-check"></i>Tasa preferencial fija - Sist. Francés</li>
                            <li class="list-group-item border-0"><i className="bi bi-check"></i>Tasa tradicional fija - Sist. Francés</li>
                            <li class="list-group-item border-0"><i className="bi bi-check"></i>Tasa U.V.A. (Índice variable)</li>
                            <li class="list-group-item border-0"><i className="bi bi-check"></i>Préstamos personales - Pre-aprobado en el día</li>
                        </ul>
                </div>
            </div>

        </section>
        </>
    )
}