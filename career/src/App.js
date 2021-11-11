
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
    <Careerexlporation /> 
    <Intrest />
    <div>
  <Switch>
 <Route path="/Signup" exact />
   <Signup />
  </Switch>
    </div>
    
    <div>
    <Switch>
   <Route path="/Login" />
     <Login />
    </Switch>
      </div>
   
      </>
  );
}

export default App;
