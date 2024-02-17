//App.jsx
import React, { useState, useEffect } from "react";
import InvadersGame from "./pages/InvadersGame";
import SnakeGame from "./pages/SnakeGame";
import Home from "./pages/Home";
import Modal from "./components/Modal";

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
    }
    if (snakeActive) {
      document.body.style.backgroundColor = "#9EC394";
      document.body.style.fontFamily = '"Press start 2P"';
    }
  }, [invadersActive, snakeActive]); 

  return (
    <>
    {!snakeActive && !invadersActive ? <Home setInvadersActive={setInvadersActive} setSnakeActive={setSnakeActive}/> : null}
    {snakeActive ? <SnakeGame setModal={setModal} setType={setType} modal={modal}/> : null}
    {invadersActive ? <InvadersGame setModal={setModal} setType={setType} modal={modal}/> : null}
    {modal ? <Modal type={type} setModal={setModal}/> : null}
    </>
  );
}

export default App;