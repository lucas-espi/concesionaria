import React from "react";
import "./slider.css"

export const Slider = () => {
    return(
       <>
       <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 slider-cart " alt="i"/>
              <div class="carousel-caption d-none d-md-block bg-dark opacity-75">
                <h2 className="fs-1">Bmw E46 Blanco</h2>
                <p className="fs-3">El 'corazón' del BMW M3 E46 es un bloque de 3,2 litros y seis cilindros en línea</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/93632/pexels-photo-93632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 slider-cart" alt="i"/>
              <div class="carousel-caption d-none d-md-block bg-dark opacity-75">
              <h2 className="fs-1 ">Mercedes Benz Coupe</h2>
              <p className="fs-3">Mercedes GLC Coupé está disponible con dos versiones de gasolina y diésel.</p>
              </div>
            </div>
            <div className="carousel-item">
            <img src="https://images.pexels.com/photos/16444626/pexels-photo-16444626/free-photo-of-puesta-de-sol-limpiar-transporte-ruedas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 slider-cart" alt="i"/>
              <div class="carousel-caption d-none d-md-block bg-dark opacity-75">
              <h2 className="fs-1 ">Volkswagen Golf</h2>
              <p className="fs-3">El Volkswagen Golf es un automóvil de turismo del segmento C.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>     
       </>
    )
};

export const Marcas  = () => {
  return(
    <> 
    <div className=" marcas-container d-flex align-items-center">
            <img src="https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfinderbmwlogo4140436-115966_115915.png" alt="Marca 1" className="img-fluid" />
            <img src="https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfindervwlogo4140434-115963_115918.png" alt="Marca 2" className="img-fluid" />
            <img src="https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfindermercedeslogo4140438-115958_115923.png" alt="Marca 3" className="img-fluid" />
            <img src="https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfindertoyotalogo4141639-115964_115917.png" alt="Marca 4" className="img-fluid" />
            <img src="https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfindermitsubishilogo4141793-115967_115914.png" alt="Marca 5" className="img-fluid" />
            <img src="https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfindernissanlogo4142910-115961_115919.png" alt="Marca 6" className="img-fluid" />
      </div>
    </>
  )
}