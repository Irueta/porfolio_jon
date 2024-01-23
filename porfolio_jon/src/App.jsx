//App.jsx

import React, { useState, useEffect } from 'react';
import Spaceship from './components/Spaceship';
import Invader from './components/Invader';
import Shot from './components/Shot';
import './App.css';

function App() {
  const [spaceshipPosition, setSpaceshipPosition] = useState({ x: 50, y: 0 });
  const [invaders, setInvaders] = useState([
    { x: 0, y: 30, type: 'CV' },
    { x: 30, y: 30, type: 'Contacto' },
    { x: 60, y: 30, type: 'Proyectos' },
    { x: 0, y: 40, type: 'CV' },
    { x: 30, y: 40, type: 'Contacto' },
    { x: 60, y: 40, type: 'Proyectos' },
  ]);
  const [shots, setShots] = useState([]);
  const [collision, setCollision] = useState(null);
  const [moveRight, setMoveRight] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
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
  }, [spaceshipPosition]);


  useEffect(() => {
    if (collision) {
      switch (collision) {
        case 'CV':
          console.log('CV clicked');
          break;
        case 'Contacto':
          console.log('Contacto clicked');
          break;
        case 'Proyectos':
          console.log('Proyectos clicked');
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
  
    const intervalId = setInterval(moveInvaders, 3000);
    const intervalId2 = setInterval(moveInvaders2, 1000);
  
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, [moveRight]);


  useEffect(() => {
      if (invaders.some((invader) => invader.y >= 80)) {
        setGameOver(true);
        setInvaders([
          { x: 0, y: 30, type: 'CV' },
          { x: 30, y: 30, type: 'Contacto' },
          { x: 60, y: 30, type: 'Proyectos' },
          { x: 0, y: 40, type: 'CV' },
          { x: 30, y: 40, type: 'Contacto' },
          { x: 60, y: 40, type: 'Proyectos' },
        ]);
      }
  }, [invaders]);
  
  if (!gameStarted && !gameOver) {
    return (
      <div className='startScreen'>
          <div className='titleContainer'>
          <img  className='titulo_invaders' src="/jon_invaders.png" alt="" />
        </div>
        <div>
        <img className='startButton' src="/start3.png" alt="" onClick={() => setGameStarted(true)}/>
        </div>
      </div>
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
      </div>
    </>
  );
}

export default App;
