import React, { useState } from "react";

function App() {
  
  const [message, setMessage] = useState("Hello !");
  const [mouseOver, setMouseOver] = useState(false);

  function handleClick (){
    setMessage("You clicked the button !")
  };

  function handleMouseOver(){
    setMouseOver(true)
  };

  function handeMouseOut(){
    setMouseOver(false)
  };
  return (
    <div className="container">
      <h1>{message}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        onClick={handleClick} 
        onMouseOver={handleMouseOver}
        onMouseOut={handeMouseOut}
        style={{backgroundColor: mouseOver ? "black" : "white"}}
        >Submit
      </button>
    </div>
  );
}

export default App;
