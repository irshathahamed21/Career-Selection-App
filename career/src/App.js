
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Intrest from './Components/Intrest';
import Careerexlporation from "./Components/Career_expor";
import {
  Switch, 
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <div>
  <Switch>
 <Route path="/" exact >
   <Signup /> 
  </Route>
  <Route path="/Login" >
    <Login />
    </Route>
    <Route path="/Intrest" >
   <Intrest />
    </Route>
    <Route path="/Careerexlporation" >
    <Careerexlporation /> 
    </Route>
  </Switch>
      </div>
  
      </>
  );
}

export default App;
