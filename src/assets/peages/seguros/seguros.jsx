import React from "react";
import './seguros.css'


export const Seguros = () => {
    return(
        <>
        <section className="container-seguros">
            <div className="box-t bg-info">
                <h1 className="title-empresa   text-white">SEGUROS</h1>
            </div>

            <div className="container box-title-gestoria col-12 ">
                <h2 className=" mb-5">SEAS O NO CLIENTE, TE ESPERAMOS PARA BRINDARTE EL SEGURO ADECUADO.</h2>
                <ul className="list-group">
                    <li className="list-group-item border-0"><i className="bi bi-check"></i>Asegurá tu auto con nosotros</li>
                    <li className="list-group-item border-0"><i className="bi bi-check"></i>Somos agentes de venta directo de La Caja</li>    
                </ul>

                <div className=" marcas-container d-flex align-items-center">
                    <img src="https://cdn.icon-icons.com/icons2/3478/PNG/512/logistics_product_box_parcel_icon_220029.png" alt="Marca 1" className="img-fluid" />
                    <img src="https://cdn.icon-icons.com/icons2/3478/PNG/512/register_login_signup_icon_219991.png" alt="Marca 2" className="img-fluid" />
                    <img src="https://cdn.icon-icons.com/icons2/3478/PNG/512/help_hour_center_icon_220006.png" alt="Marca 3" className="img-fluid" />
                    <img src="https://cdn.icon-icons.com/icons2/3478/PNG/512/logistic_shipping_logistics_delivery_transport_box_icon_219981.png" alt="Marca 4" className="img-fluid" />
                </div>

                <button type="button" className="btn btn-secondary mb-5">ASESORATE</button>
            </div>

        </section>
        </>
    )
}