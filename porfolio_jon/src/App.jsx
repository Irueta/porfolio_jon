//App.jsx

import React, { useState, useEffect } from 'react';
import Spaceship from './components/Spaceship';
import Invader from './components/Invader';
import Shot from './components/Shot';

function App() {
  const [spaceshipPosition, setSpaceshipPosition] = useState({ x: 50, y: 0 });
  const [invaders, setInvaders] = useState([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]);
  const [shots, setShots] = useState([]);

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
    // Esta función se encarga de mover los disparos hacia arriba en intervalos regulares
    const moveShots = () => {
      setShots((prevShots) =>
        prevShots.map((shot) => ({ ...shot, y: shot.y + 5 }))
      );
    };
  
    // Intervalo para mover los disparos cada 16ms (aproximadamente 60 FPS)
    const intervalId = setInterval(moveShots, 16);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [shots]); // Dependencia de shots para que el efecto se ejecute cuando se actualizan los disparos
  

  return (
    <>
      <Spaceship position={spaceshipPosition} />
      {invaders.map((invader, index) => (
        <Invader key={index} position={invader} />
      ))}
      {shots.map((shot, index) => (
        <Shot key={index} position={shot} />
      ))}
    </>
  );
}

export default App;
