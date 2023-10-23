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
    <div className="App">
      <h1>Concesionaria de Autos</h1>
      <ul>
        {vehicleData.map(vehicle => ( 
          <li key={vehicle.id}>
            <h2>{vehicle.title}</h2>
            <p>{vehicle.description}</p>
            <p>Precio: ${vehicle.price}</p>
            {/* Renderiza las imágenes aquí */}
            {vehicle.images.map(image => (
              <img key={image} src={image} alt={vehicle.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}