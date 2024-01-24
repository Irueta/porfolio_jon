//App.jsx

import React, { useState, useEffect } from 'react';
import Spaceship from './components/Spaceship';
import Invader from './components/Invader';
import Shot from './components/Shot';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [spaceshipPosition, setSpaceshipPosition] = useState({ x: 50, y: 0 });
  const [invaders, setInvaders] = useState([
    { x: 0, y: 50, type: 'CV' },
    { x: 30, y: 50, type: 'Contacto' },
    { x: 60, y: 50, type: 'Proyectos' },
  ]);
  const [shots, setShots] = useState([]);
  const [collision, setCollision] = useState(null);
  const [moveRight, setMoveRight] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [modal, setModal] = useState(false);
  const [type, setType] = useState(null);
  


  useEffect(() => {
    if(modal === false){
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setSpaceshipPosition((position) => ({ ...position, x: Math.max(position.x - 5, 0) }));
      } else if (event.key === 'ArrowRight') {
        setSpaceshipPosition((position) => ({ ...position, x: Math.min(position.x + 5, 100) }));
      } else if (event.key === ' ') { // Si la tecla es espacio
        setShots((prevShots) => [...prevShots, { ...spaceshipPosition, y: spaceshipPosition.y + 5 }]);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }}, [spaceshipPosition, modal]);


  useEffect(() => {
    if (collision) {
      switch (collision) {
        case 'CV':
          console.log('CV clicked');
          setModal(true);
          setType('CV');
          break;
        case 'Contacto':
          console.log('Contacto clicked');
          setModal(true);
          setType('Contacto');
          break;
        case 'Proyectos':
          console.log('Proyectos clicked');
          setModal(true);
          setType('Proyectos');
          break;
        default:
          break;
      }
      setCollision(null); // Reset collision state after handling it
    }
  }, [collision]); // Dependencia de collision para que el efecto se ejecute cuando se detecta una colisión

  useEffect(() => {
    // Esta función se encarga de mover los disparos hacia arriba en intervalos regulares
    const moveShots = () => {
      setShots((prevShots) =>
        prevShots.map((shot) => {
          // Comprobar si este disparo ha colisionado con un invasor
          for (let invader of invaders) {
            if (Math.abs(shot.x - invader.x) < 5 && Math.abs(shot.y - invader.y) < 5) {
              // Si hay una colisión, establecer el estado de colisión y eliminar el disparo
              setCollision(invader.type);
              //return null;
            }
          }
          // Si no hay colisión, mover el disparo hacia arriba
          return { ...shot, y: shot.y + 5 };
        }).filter(Boolean) // Eliminar los disparos que han colisionado
      );
    };
  
    // Intervalo para mover los disparos cada 16ms (aproximadamente 60 FPS)
    const intervalId = setInterval(moveShots, 16);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [shots, invaders]);// Dependencia de shots para que el efecto se ejecute cuando se actualizan los disparos


  useEffect(() => {
    if (modal === false){
    const moveInvaders = () => {
      setInvaders((prevInvaders) =>
        prevInvaders.map((invader) => ({ ...invader, y: invader.y + 1 }))
      );
    };
  
    const moveInvaders2 = () => {
      setInvaders((prevInvaders) => {
        const maxRight = Math.max(...prevInvaders.map((invader) => invader.x));
        const maxLeft = Math.min(...prevInvaders.map((invader) => invader.x));
  
        if (!moveRight && maxRight >= 75) {
          setMoveRight(true);
          return prevInvaders.map((invader) => ({ ...invader, x: invader.x - 1 }));
        }
        if (moveRight && maxLeft <= 0) {
          setMoveRight(false);
          return prevInvaders.map((invader) => ({ ...invader, x: invader.x + 1 }));
        }
        return prevInvaders.map((invader) => ({ ...invader, x: invader.x + (moveRight ? -1 : 1) }));
      });
    };
  
    const intervalId = setInterval(moveInvaders, 2000);
    const intervalId2 = setInterval(moveInvaders2, 500);
  
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }}, [moveRight,modal]);


  useEffect(() => {
      if (invaders.some((invader) => invader.y >= 80) || gameOver === true) {
        setGameOver(true);
      }
  }, [invaders]);


  useEffect(() => {
    if (gameOver === true){
      setInvaders([
        { x: 0, y: 50, type: 'CV' },
        { x: 30, y: 50, type: 'Contacto' },
        { x: 60, y: 50, type: 'Proyectos' },
      ]);
    }
  }, [gameOver]);
  
  if (!gameStarted && !gameOver) {
    return (
      <>
      <div className='headerBar'>
          <div className='scoreContainer'>
            <div className='leyendaImgContainer'>
            <img className='leyendaImg1' src="/controles.png" alt="" />
            </div>
            <div className='controles'>
            <p className='flechas'>← →</p>
            <p>espacio</p>
            </div>
          </div>
          <div></div>
          <div className='livesContainer'>
            <div className='leyendaConTexto'>
            <img className='leyendaImg2' src="/leyenda.png" alt="" />
            <p>Con casi acertar bastará</p>
            </div>
            <div className='leyendaIconos'>
            <div className='leyenda leyenda1'>
              <img src="/nave-espacial-CV.png" alt="" />
              <p>CV</p>
            </div>
            <div className='leyenda leyenda2'>
              <img src="/nave-espacial-Contacto.png" alt="" />
              <p>Contacto</p>
            </div>
            <div className='leyenda leyenda3'>
              <img src="/nave-espacial-Proyectos.png" alt="" />
              <p>Proyectos</p>
              </div> 
            </div>
          </div>
        </div>
      <div className='startScreen'>
          <div className='titleContainer'>
          <img  className='titulo_invaders' src="/jon_invaders.png" alt="" />
        </div>
        <div>
        <img className='startButton' src="/start3.png" alt="" onClick={() => setGameStarted(true)}/>
        </div>
      </div>
      </>
    );
  }
  if (gameOver) {
    return (
      <>
        <div>
          <img className='titulo_invaders' src="/gameover.png" alt="" />
          <img  className='startButton' src="volverajugar.png" alt="" onClick={() => {setGameStarted(true); setGameOver(false)}}/>
        </div>
      </>
    )
  }
  return (
    <>
    <div>
      <div className='gameContainer'>
      <div className='headerBar'>
          <div className='scoreContainer'>
            <div className='leyendaImgContainer'>
            <img className='leyendaImg1' src="/controles.png" alt="" />
            </div>
            <div className='controles'>
            <p className='flechas'>← →</p>
            <p>espacio</p>
            </div>
          </div>
          <div></div>
          <div className='livesContainer'>
            <div className='leyendaConTexto'>
            <img className='leyendaImg2' src="/leyenda.png" alt="" />
            <p>Con casi acertar bastará</p>
            </div>
            <div className='leyendaIconos'>
            <div className='leyenda leyenda1'>
              <img src="/nave-espacial-CV.png" alt="" />
              <p>CV</p>
            </div>
            <div className='leyenda leyenda2'>
              <img src="/nave-espacial-Contacto.png" alt="" />
              <p>Contacto</p>
            </div>
            <div className='leyenda leyenda3'>
              <img src="/nave-espacial-Proyectos.png" alt="" />
              <p>Proyectos</p>
              </div> 
            </div>
          </div>
        </div>
        {/* <button onClick={() => {setGameStarted(false); setGameOver(false)}}></button> */}
        <div className='titleContainer'>
          <img  className='titulo_invaders' src="/jon_invaders.png" alt="" />
        </div>
        <div className='spaceShipContainer'>
        <Spaceship position={spaceshipPosition} />
        </div>
        <div className='invadersContainer'>
        {invaders.map((invader, index) => (
          <Invader key={index} position={invader} type={invader.type}/>
        ))}
        </div>
        {shots.map((shot, index) => (
          <Shot key={index} position={shot} />
        ))}
        </div>
        {modal ?
          <Modal type={type} setModal={setModal}/>
          : null}
      </div>
    </>
  );
}

export default App;
