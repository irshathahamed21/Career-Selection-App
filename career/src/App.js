
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Intrest from './Components/Intrest';
import {
  Switch, 
  Route
} from "react-router-dom";

function App() {
  return (
    <>
 <Intrest />
  <div className="App">
  <Switch>
 <Route path="/Signup" exact />
   {/* <Signup /> */}
  </Switch>
    </div>

    <div className="App">
    <Switch>
   <Route path="/Login" />
     {/* <Login /> */}
    </Switch>
      </div>
   
      </>
  );
}

export default App;
