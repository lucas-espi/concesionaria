import React from "react";
import './empresa.css'

export const Empresa =() =>{
    return(
        <>
        <div className="box-t bg-info">
            <h1 className="title-empresa   text-white">SOBRE LA EMPRPESA</h1>
        </div>

        <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column flex-md-row col-10  mt-5 mb-5">
            <div className=" col-10 col-sm-8 col-md-5">
                <img src="https://images.pexels.com/photos/4062473/pexels-photo-4062473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
            </div>
            <h5 className="col-12 col-sm-8 col-md-7 p-5">Hace años, nuestra concesionaria de autos nació con la visión de hacer que comprar y vender vehículos 
            fuera más fácil y gratificante. Desde entonces, nos hemos comprometido a construir un servicio basado 
            en la confianza y la satisfacción del cliente, ofreciendo experiencias personalizadas y soluciones a medida.</h5>
        </div>



        <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column-reverse flex-md-row col-10 mt-5 mb-5">
            <h5 className="col-12 col-sm-8 col-md-7 p-5">A lo largo de los años, hemos crecido en tamaño y excelencia, invirtiendo en la capacitación del personal, 
            tecnología avanzada y procesos eficientes. Queremos que cada transacción sea sin complicaciones y que nuestros 
            clientes se sientan seguros en cada paso.</h5>
            <div className="  col-10 col-sm-8 col-md-5">
                <img src="https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
            </div>
        </div>


        <div className=" box-p d-flex justify-content-around align-items-center flex-wrap flex-column flex-md-row col-10  mt-5 mb-5">
            <div className=" col-10 col-sm-8 col-md-5 ">
                <img src="https://images.pexels.com/photos/10029880/pexels-photo-10029880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100" alt="Responsive image"/>
            </div>
            <h5 className=" col-12 col-sm-8 col-md-7 p-5">Nuestra historia se basa en relaciones sólidas con clientes que se han convertido en amigos y familia automotriz. 
            Mirando al futuro, seguimos enfocados en innovar y ser la elección número uno para quienes buscan un socio confiable 
            en su viaje automotriz.</h5>
        </div>


        <h5 className="footer-text bg-dark text-white text-center p-5 mb-5 mt-5 col-10">
        "Estamos orgullosos de nuestro pasado y emocionados por el futuro. Gracias por ser parte de 
        nuestra historia y esperamos ser parte de la tuya."
        </h5>
        </>
    )
}