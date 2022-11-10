import React, { useState } from "react";

function App2() {

    const [name, setName] = useState("");

    function handleClick(event) {
        setName(name)
    }
    return (
        <div className="container">
            <h1>Hello{name}</h1>
            <input type="text" placeholder="What's your name?" value={name}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default App2;
