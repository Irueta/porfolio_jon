
function Home({setInvadersActive, setSnakeActive}) {

  return (
    <div>
    <button onClick={()=>setSnakeActive(true)}></button>
    <button onClick={()=>setInvadersActive(true)}></button>
    </div>
  );
}

export default Home;