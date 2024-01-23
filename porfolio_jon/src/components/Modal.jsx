//Modal.jsx
import React, { useState, useEffect } from 'react';
import './Modal.css'

function Modal({ type, setModal }) {
    

    const handleClick = () => {
        setModal(false);
    };

 //funcion para mostrar contenido diferente segun el type
    const renderContent = () => {
        switch (type) {
            case 'CV':
                return (
                    <div className='modalContainer'>
                        <h1 className='modalTitle'>CV</h1>
                        <p className='modalText'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maxime.
                        </p>
                        <button className='modalButton' onClick={handleClick}>Cerrar</button>
                    </div>
                );
            case 'Contacto':
                return (
                    <div className='modalContainer'>
                        <h1 className='modalTitle'>Contacto</h1>
                        <p className='modalText'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maxime.
                        </p>
                        <button className='modalButton' onClick={handleClick}>Cerrar</button>
                    </div>
                );
            case 'Proyectos':
                return (
                    <div className='modalContainer'>
                        <h1 className='modalTitle'>Proyectos</h1>
                        <p className='modalText'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maxime.
                        </p>
                        <button className='modalButton' onClick={handleClick}>Cerrar</button>
                    </div>
                );
            default:
                break;
        }

    }
    return (
        <div className='modal'>
            {renderContent()}
        </div>
    );
}

export default Modal;