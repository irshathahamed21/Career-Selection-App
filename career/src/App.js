
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Intrest from './Components/Intrest';
import Careerexploration from "./Components/Career_expor";
import Flashexpo from "./Components/Flashexpo"
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
        <Route path="/Careerexploration" >
        <Careerexploration /> 
        </Route>
        <Route path="/Flashexpo" >
        <Flashexpo /> 
        </Route>
        
  </Switch>
      </div>
  
      </>
  );
}

export default App;
