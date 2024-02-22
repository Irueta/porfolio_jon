//App.jsx
import React, { useState, useEffect } from "react";
import InvadersGame from "./pages/InvadersGame";
import SnakeGame from "./pages/SnakeGame";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import './App.css';

function App() {
const [invadersActive, setInvadersActive] = useState(false);
const [snakeActive, setSnakeActive] = useState(false);
const [modal, setModal] = useState(false);
const [type, setType] = useState(null);

useEffect(() => {
    if (invadersActive) {
      document.body.style.backgroundImage = "url('/fondo.jpeg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.fontFamily = '"Press start 2P"';
      document.body.style.fontSize = "10px";
      document.body.style.color = "black";
    }
    if (snakeActive) {
      document.body.style.backgroundColor = "#9EC394";
      document.body.style.background = "#9EC394";
      document.body.style.fontFamily = '"Press start 2P"';
      document.body.style.color = "black";
    }
    if (!invadersActive && !snakeActive) {
      document.body.style.background = "linear-gradient(#57526e, #0E0A2F)";
      /* document.body.style.background = "linear-gradient(#57526e, black)"; */
      document.body.style.color = "white";
      document.body.style.fontFamily = 'Lucida Console';
      document.body.style.fontSize = "16px";
    }
  }, [invadersActive, snakeActive]); 



  return (
    <>
    {!snakeActive && !invadersActive ? <Home setInvadersActive={setInvadersActive} setSnakeActive={setSnakeActive}/> : null}
    {invadersActive ? <InvadersGame setModal={setModal} setType={setType} modal={modal} setInvadersActive={setInvadersActive}/> : null}
    {snakeActive ? <SnakeGame setModal={setModal} setType={setType} modal={modal} setSnakeActive={setSnakeActive}/> : null}
    {modal ? <Modal modal={modal} type={type} setModal={setModal} invadersActive={invadersActive} snakeActive={snakeActive} /> : null}
    </>
  );
}

export default App;