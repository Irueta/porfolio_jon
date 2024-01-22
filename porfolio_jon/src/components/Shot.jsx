//Shot.jsx

function Shot({ position }) {
    const style = {
      position: 'absolute',
      bottom: `${position.y}%`,
      left: `${position.x}%`,
      width: '10px',
      height: '20px',
      backgroundColor: 'red',
    };
  
    return <div style={style}></div>;
  }
  
  export default Shot;