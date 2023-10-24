import React, { useState, useEffect } from 'react';
import './vehiculo.css'

export const Vehiculos =() => {
    const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    // Realizar una solicitud fetch para obtener los datos del JSON
    fetch('/src/assets/bbdd/bbdd.json') 
      .then(response => response.json())
      .then(data => {
        // Almacenar los datos en el estado del componente
        setVehicleData(data.autos);
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  return (
    <div className="container  mb-5 mt-5">

      <h1 className='text-center'>Concesionaria de Autos</h1>
      
      <div className=' v-v container'>
          {vehicleData.map(vehicle => (  
          <div key={vehicle.id} className=" box-card shadow-sm ">
              <div className="card-body box-title p-1">
                <h5>{vehicle.title}</h5>
              </div>
              <div className='box-img-v '>
                  {vehicle.images.map(image => (
                    <img className='img-car-v' key={image} src={image} alt={vehicle.title} />
                    ))}
              </div>
              <div clasName="card-body box-desc">
                <p className="card-text p-1">{vehicle.description}</p>
                <p className="card-text text-success font-weight-bold  p-1">Precio: ${vehicle.price}</p>
              </div>
          </div>
          ))}
      </div>
    </div>
)
}