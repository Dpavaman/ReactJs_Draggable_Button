import React, { useState } from 'react';
import './App.css';
import Draggable from 'react-draggable';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [type, setType] = useState('')
  // const [coordinates, setCoordinates] = useState('')

  const dragHandler = (e, ui) => {
    setX(x + ui.deltaX);
    setY(x + ui.deltaY)
  }
  const eventHandler = (work, coordinates) => {
    setType(work.type);
  }


  return (
    <div className="App">
      <h1>React Draggable Button</h1>
      <h2>Button is Posotioned at x: {x.toFixed(0)} and Y : {y.toFixed(0)} coordinates </h2>
      <div>
        Operation last carried : {type.toUpperCase()}
      </div>
      <Draggable bounds={{ top: 0, left: 0 }} onDrag={dragHandler} onStart={eventHandler} onStop={eventHandler} onMouseDown={eventHandler}
        onMouseUp={eventHandler} onTouchStart={eventHandler} onTouchEnd={eventHandler} >
        <button className='draggable'>I am Ready to be dragged </button>
      </Draggable>
    </div>
  );
}

export default App;
