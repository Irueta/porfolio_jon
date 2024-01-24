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
                          <div className='contactoContainer'>
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
                        </div>
                      );
            case 'Proyectos':
                return (
                    <div className='modalContainer'>
                        <button className='modalButton' onClick={handleClick}>Cerrar</button>
                        <div className='textoProyectos'>
                        <h1 className='modalTitle'>Proyectos</h1>
                        <p className='modalText'>Lo mejor es conocerme, pero he aquí algunos ejemplos:</p>
                        </div>
                        <div className='videosContainer'>
                        <video src="/demo_bootcampsurvival.webm" controls></video>
                        <video src="/demo_happyflow.webm" controls></video>
                        <video src="/demo_lagunpay.webm" controls></video>
                        <p>*Este último con colaboración de Alex Basurto</p>
                        </div>
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