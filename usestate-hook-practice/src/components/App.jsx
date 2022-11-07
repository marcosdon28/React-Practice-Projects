import React, { useState } from "react";

function App() {
  var now = new Date().toLocaleTimeString();
  var [time, setTime] = useState(now);

  setInterval(changeTime , 1000)

  function changeTime (){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
