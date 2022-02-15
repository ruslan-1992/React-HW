import { useRef, useState } from "react";

const FigureRandom = () => {
  const [isMoves, serIsMoves] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timerID = useRef();

  const handleMouseOver = () => {
      if (!isMoves) {

          timerID.current = setTimeout(() => {
              setPosition({
                  x: Math.floor(Math.random() * (window.innerWidth - 100)),
                  y: Math.floor(Math.random() * (window.innerHeight - 100))
              });
          }, 300);
      }
  }

  const handleMouseDown = () => {
      clearTimeout(timerID.current);
      serIsMoves(true);
  }

  const handleMouseMove = (event) => {
      if (isMoves) {
          setPosition({ x: event.pageX -50, y: event.pageY -50});
      }
  }

  const handleMouseUp = () => {
    // window.addEventListener('mouseMove', handleMouseMove);
    serIsMoves(false);
};


  return (
      <div className='container' onMouseMove={handleMouseMove}>
          <div className='figure' onMouseOver={handleMouseOver} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}              
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
              figure
          </div>
      </div>
  );
}

export default FigureRandom;
                
              
                
