//Invader.jsx
import React, { useState, useEffect } from 'react';
import './Invader.css'

function Invader({ position, type }) {




    const handleClick = () => {
      switch (type) {
        case 'CV':
          // Código para manejar el clic en el botón CV
          console.log('CV clicked');
          break;
        case 'Contacto':
          // Código para manejar el clic en el botón Contacto
          console.log('Contacto clicked');
          break;
        case 'Proyectos':
          // Código para manejar el clic en el botón Proyectos
          console.log('Proyectos clicked');
          break;
        default:
          break;
      }
    };


 // Sin dependencias, por lo que el efecto se ejecuta solo una vez
  
    return (
      <button  className='invaderButton' style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%` }} onClick={handleClick}>
        {type}
      </button>
    );
  }
  
  export default Invader;