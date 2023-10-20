import React from "react";
import './gestoria.css'

export const Gestoria =() =>{
    return(
        <>
        <div className="box-t bg-info">
            <h1 className="title-empresa   text-white">GESTORÍA</h1>
        </div>

        <div className="box-title-gestoria col-10">
            <h2 className=" mb-5">GESTIONAMOS TODOS LOS TRÁMITES, TRANSFERENCIAS, REGISTRO DEL AUTOMOTOR, CÉDULA VERDE...</h2>
            <p className="">Nos especializamos en trámites del automotor, mas de 50 años de experiencia nos avalan.</p>
            <p className="mb-5">Gestionamos trámites para particulares y empresas. Damos un servicio personalizado asesorando a nuestros clientes en cada paso, logrando que los trámites se concreten en el menor tiempo posible y sin observaciones. No dudes en contactarnos para saber más de nosotros y nuestros servicios.</p>
            <button type="button" class="btn btn-secondary">Consultanos</button>
        </div>


        <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column flex-md-row col-10  mt-5 mb-5">
            <div className=" col-10 col-sm-8 col-md-5">
                <img src="https://images.pexels.com/photos/7144176/pexels-photo-7144176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
            </div>
            <div class="border-0 card col-12 col-sm-8 col-md-7 p-4">
                <div class="card-body ">
                  <h4 class="card-title">Trámites de Usados</h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Morbi leo risus</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Porta ac consectetur ac</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Vestibulum at eros</li>
                </ul>
            </div>
        </div>



        <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column-reverse flex-md-row col-10 mt-5 mb-5">
            <div class="border-0 card col-12 col-sm-8 col-md-7 p-4">
                <div class="card-body ">
                  <h4 class="card-title">Venta De Vehículos</h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Morbi leo risus</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Porta ac consectetur ac</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Vestibulum at eros</li>
                </ul>
            </div>
            <div className="  col-10 col-sm-8 col-md-5">
                <img src="https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
            </div>
        </div>


        <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column flex-md-row col-10  mt-5 mb-5">
            <div className=" col-10 col-sm-8 col-md-5 ">
                <img src="https://images.pexels.com/photos/4173193/pexels-photo-4173193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
            </div>
            <div class="border-0 card col-12 col-sm-8 col-md-7 p-4">
                <div class="card-body ">
                  <h4 class="card-title">Trámites de rentas</h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Morbi leo risus</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Porta ac consectetur ac</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Vestibulum at eros</li>
                </ul>
            </div>
        </div>


        <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column-reverse flex-md-row col-10 mt-5 mb-5">
            <div class="border-0 card col-12 col-sm-8 col-md-7 p-4">
                <div class="card-body ">
                  <h4 class="card-title">Tramites de 0km</h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Morbi leo risus</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Porta ac consectetur ac</li>
                    <li class="list-group-item border-0"><i className="bi bi-check"></i>Vestibulum at eros</li>
                </ul>
            </div>
            <div className="  col-10 col-sm-8 col-md-5">
                <img src="https://images.pexels.com/photos/15935705/pexels-photo-15935705/free-photo-of-puesta-de-sol-coche-vehiculo-tecnologia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
            </div>
        </div>


        <h5 className="footer-text bg-dark text-white text-center p-5 mb-5 mt-5 col-10">
        "Estamos orgullosos de nuestro pasado y emocionados por el futuro. Gracias por ser parte de 
        nuestra historia y esperamos ser parte de la tuya."
        </h5>
        </>
    )
}