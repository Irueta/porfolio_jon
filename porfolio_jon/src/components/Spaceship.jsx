import React, { useState, useEffect } from 'react';
import './Spaceship.css'

function Spaceship({ position }) {
    const [spaceshipPosition, setSpaceshipPosition] = useState({x: 50, y: 0});
    const style = {
      position: 'absolute',
      bottom: `${position.y}%`,
      left: `${position.x}%`,
      width: '12%',
      height: '10%',
      marginLeft: '-20px'
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'ArrowLeft') {
            setSpaceshipPosition(position => ({...position, x: Math.max(position.x - 5, 0)}));
          } else if (event.key === 'ArrowRight') {
            setSpaceshipPosition(position => ({...position, x: Math.min(position.x + 5, 100)}));
          }
        };
      
        window.addEventListener('keydown', handleKeyDown);
      
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
  
    return (
        <div className='coheteContainer'>
            <img className='cohete'  style={style} src="/cohete.png" alt="" />
        </div>
    )
  }

    export default Spaceship;