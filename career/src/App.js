
import './App.css';
import Signup from './Components/Signlogin/Signup';
import Login from './Components/Signlogin/Login';
import Intrest from './Components/Intrest/Intrest';
import Careerexploration from "./Components/Career/Career_expor";
import Flashexpo from "./Components/Flash/Flashexpo"
import Career from "./Components/CareeColeectino/Career_menu"
import Videobar from "./Components/CareeColeectino/Career_video"
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
        
        <Route path="/Careermenu" >
        <Career /> 
        </Route>
        
        <Route path="/Careervid" >
        <Videobar /> 
        </Route>
      
  </Switch>
      </div>
  
      </>
  );
}

export default App;
