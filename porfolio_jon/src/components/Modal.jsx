//Modal.jsx
import React, { useState, useEffect } from 'react';
import './Modal.css'

function Modal({ type, setModal }) {
    

    const handleClick = () => {
        setModal(false);
    };

    function sendEmail(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
      
        window.location.href = `mailto:irueta@gmail.com?subject=Mensaje de ${name} (${email})&body=${message}`;
      }


 //funcion para mostrar contenido diferente segun el type
    const renderContent = () => {
        switch (type) {
            case 'CV':
                return (
                    <div className='modalContainer'>
                        <button className='modalButton' onClick={handleClick}>Cerrar</button>
                      <iframe 
                        className='modalPDF'
                        src="https://drive.google.com/file/d/1ZB6PgAlAvuBkLeCkr2lt1RpHLLfwbe_c/preview" 
                        width="640" 
                        height="780"
                      ></iframe>
                    </div>
                  );
                  case 'Contacto':
                    return (
                        <div className='modalContainer'>
                          <button className='modalButton' onClick={handleClick}>Cerrar</button>
                          <h1 className='modalTitle'>Contacto</h1>
                          <form className='contactForm' onSubmit={sendEmail}>
                            <label>
                              Nombre:
                              <input type='text' name='name' />
                            </label>
                            <label>
                              Correo electrónico:
                              <input type='email' name='email' />
                            </label>
                            <label>
                              Mensaje:
                              <textarea name='message' />
                            </label>
                            <input type='submit' value='Enviar' />
                          </form>
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