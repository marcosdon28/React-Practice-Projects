import LoginCard from "./components/LoginCard"
import Form from "./components/Form";


var userIsRegistered = false;


function App() {
  return(
    <div className="container">
      {userIsRegistered ? <LoginCard />: <Form />}
    </div>
    
  )
}

export default App;

{/* <div className="container">
      {isLoggedIn ? <h1>Hello !</h1> : <LoginCard />}
    </div>*/}