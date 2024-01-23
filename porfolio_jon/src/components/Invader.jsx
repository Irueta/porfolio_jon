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
        <>
        <div className='invaderImg' style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%` }} onClick={handleClick}>
            <p className='tipoInvader'>{type}</p>
            <img className='naveExtraterrestre' src="/nave-espacial.png" alt="" typeof={type}/>
        </div>

      </>
    );
  }
  
  export default Invader;


/*   <button  className='invaderButton' style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%` }} onClick={handleClick}>
  {type}
</button> */


{/* <div className='invaderImg' typeof={type}>
<p className='tipoInvader' style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%` }}>{type}</p>
<img className='naveExtraterrestre' src="/nave-espacial.png" alt="" style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%` }} onClick={handleClick} typeof={type}/>
</div> */}