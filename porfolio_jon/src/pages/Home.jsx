import './Home.css'



function Home({setInvadersActive, setSnakeActive}) {
    

  return (
    <div>
      <header>
        <div><img className='logo' src="logoWeb2.png" alt="" /></div>
        <div className='nombreConEfecto'>
        <img className='jon_letras' src="jon_irueta_badiola.png" alt="" />
          <div class="loadership_UPVOB"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='jon'>
        <img className='jon_argazki' src="jon_argazki2.png" alt="" />
        </div>
      </header>
      <div className='etiquetas'><h2>Full Stack Developer || Gamification || E-learning Developer</h2></div>
        <div className='textoEntrada'>
            <h2>¿Qué mejor forma de conocerme que jugando a algunos de los juegos más míticos?</h2>
            <h2>¡Haz click en el juego que más te guste para conocerme mejor!</h2>
        </div>
        <div className="videosJuegos">
          <div className="videoJuego">
            <img className='arcadeMachine' src="arcade2.jpg" alt="" />
            <video className='videoGame' src="invadersVideo.webm" autoPlay loop muted></video>
            <div className='outer'>
              <div class="button_slide slide_right" onClick={()=>setInvadersActive(true)}>JUGAR</div>
            </div>
          </div>
          <div className="videoJuego">
            <img className='arcadeMachine' src="arcade2.jpg" alt="" />
            <video className='videoGame' src="snakeVideo.webm" autoPlay loop muted></video>
            <div className='outer'>
              <div class="button_slide slide_right" onClick={()=>setSnakeActive(true)}>JUGAR</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;