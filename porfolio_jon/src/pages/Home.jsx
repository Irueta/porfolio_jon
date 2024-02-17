import './Home.css'



function Home({setInvadersActive, setSnakeActive}) {
    

  return (
    <div>
        <h1>Jon Irueta</h1>
        <img className='jon_argazki' src="jon_argazki.jpg" alt="" />
        <h2>Full Stack Developer || Gamification || E-learning Developer</h2>
        <p>¿Qué mejor forma de conocerme que jugando a algunos de los juegos más míticos?</p>
        <p>¡Haz click en el juego que más te guste para conocerme mejor!</p>
        <div className="videoContainer">
        <video src="snakeVideo.webm" autoPlay loop muted onClick={()=>setSnakeActive(true)}></video>
        <video src="invadersVideo.webm" autoPlay loop muted onClick={()=>setInvadersActive(true)}></video>
        </div>
    </div>
  );
}

export default Home;