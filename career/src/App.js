
import './App.css';
import Signup from './Components/Signlogin/Signup';
import Login from './Components/Signlogin/Login';
import Intrest from './Components/Intrest/Intrest';
import Careerexploration from "./Components/Career/Career_expor";
import Flashexpo from "./Components/Flash/Flashexpo"
import Careermenu from "./Components/CareeColeectino/Career_menu"
import Videomenu from "./Components/CareeColeectino/Career_video"
import {Page1} from'./Components/Quiz/Page1.jsx'
import {Page2} from'./Components/Quiz/Page2.jsx'
import {Page3} from'./Components/Quiz/Page3.jsx'
import {Page4} from'./Components/Quiz/Page4.jsx'
import {Page5} from'./Components/Quiz/Page5.jsx'
import {Page6} from'./Components/Quiz/Page6.jsx'
import {Page7} from'./Components/Quiz/Page7.jsx'
import {Page8} from'./Components/Quiz/Page8.jsx'
import {Page9} from'./Components/Quiz/Page9.jsx'
import {Page10} from'./Components/Quiz/Page10.jsx'
import {Awsome} from'./Components/Quiz/Awsome.jsx'
import {Started} from'./Components/Quiz/Started.jsx'
import {Map} from'./Components/Quiz/Map.jsx'
import {Career} from'./Components/Quiz/Career.jsx'
import {Videobar} from'./Components/Quiz/Video.jsx'
import HeaderNav from'./Components/Quiz/Quiz'
import {
  Switch, 
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <div>
    <Switch>
      <Route path="/Signup" exact >
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
      <Careermenu /> 
      </Route>
        
      <Route path="/Careervid" >
      <Videomenu /> 
      </Route>
      
    </Switch>
      </div>
  
      <div className="App">
     
    <Switch>
   <Route path="/Quiz" exact>
      <HeaderNav/>
   </Route>
    </Switch>
    </div>
    <div className="App">
    <Switch>
   <Route path="/Quiz/Page1">
      <Page1/>
   </Route> 
   </Switch>
   </div>
   <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page2">
      <Page2/>
   </Route> 
    
    </Switch>
   
    </div>

    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page3">
      <Page3/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page4">
      <Page4/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page5">
      <Page5/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page6">
      <Page6/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page7">
      <Page7/>
   </Route> 
    
    </Switch>
   
    </div>

    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page8">
      <Page8/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page9">
      <Page9/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Page10">
      <Page10/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Awsome">
      <Awsome/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Map">
      <Map/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Started">
      <Started/>
   </Route> 
    
    </Switch>
   
    </div>
    <div className="App">
    
    <Switch>
   <Route path="/Quiz/Career">
      <Career/>
   </Route> 
    
    </Switch>
   
    </div>
     <div className="App">
    
    <Switch>
   <Route path="/Quiz/Video">
      <Videobar/>
   </Route> 
    </Switch>
    </div>

      </>
  );
}

export default App;
