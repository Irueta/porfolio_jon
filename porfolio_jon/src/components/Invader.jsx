//Invader.jsx
import React, { useState, useEffect } from 'react';
import './Invader.css'

function Invader({ position, setType, type, setModal }) {




    const handleClick = () => {
      switch (type) {
        case 'CV':
          // Código para manejar el clic en el botón CV
          console.log('CV clicked');
          setModal(true);
          setType('CV');
          break;
        case 'Contacto':
          // Código para manejar el clic en el botón Contacto
          console.log('Contacto clicked');
          setModal(true);
          setType('Contacto');
          break;
        case 'Proyectos':
          // Código para manejar el clic en el botón Proyectos
          console.log('Proyectos clicked');
          setModal(true);
          setType('Proyectos');
          break;
        default:
          break;
      }
    };


 // Sin dependencias, por lo que el efecto se ejecuta solo una vez
  
    return (
        <>
        <div className='invaderImg' style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%` }} onClick={handleClick}>
            <img className='naveExtraterrestre' src={`/nave-espacial-${type}.png`} alt="" typeof={type} onClick={handleClick}/>
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