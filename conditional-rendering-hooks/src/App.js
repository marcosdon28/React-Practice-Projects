import LoginCard from "./components/LoginCard"
import Form from "./components/Form";

import React, { useState } from "react";


function App() {
  const [userIsRegistered, setUserRegistered ] = useState(false)

  const [count, setCount] = useState(0);

  function changeRegisteredState(){
    userIsRegistered ? setUserRegistered(false) : setUserRegistered(true) 
  }

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  return(
    <div className="container">
      
      <h2>registered status</h2>
      <button onClick={changeRegisteredState}>Change</button>
      
      {userIsRegistered ? <LoginCard />: <Form />}
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

    </div>
    
  )
}

export default App;
