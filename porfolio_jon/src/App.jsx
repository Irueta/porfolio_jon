//App.jsx
import React, { useState, useEffect } from "react";
import InvadersGame from "./pages/InvadersGame";
import SnakeGame from "./pages/SnakeGame";
import Home from "./pages/Home";

function App() {
const [invadersActive, setInvadersActive] = useState(false);
const [snakeActive, setSnakeActive] = useState(false);

useEffect(() => {
    if (invadersActive) {
      document.body.style.backgroundImage = "url('/fondo.jpeg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.fontFamily = '"Press start 2P"';
      document.body.style.fontSize = "10px";
    }
    if (snakeActive) {
      document.body.style.backgroundColor = "#9EC394";
      document.body.style.fontFamily = '"Press start 2P"';
    }
  }, [invadersActive, snakeActive]); 

  return (
    <>
    {!snakeActive && !invadersActive ? <Home setInvadersActive={setInvadersActive} setSnakeActive={setSnakeActive}/> : null}
    {snakeActive ? <SnakeGame /> : null}
    {invadersActive ? <InvadersGame /> : null}
    </>
  );
}

export default App;