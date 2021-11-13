import "./App.css"

import {Home} from "./components/home"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Roadmap} from "./components/Roadmap"

import {PaymentMethod} from "./components/Payment_page1"
import {Card_payment} from "./components/Card_payment"
import {Booking} from "./components/Booking"
import {ResultCalendar} from "./components/Calendar"
function App() {


 return (
  //  <Home/>
  <>
   
    <Booking />
    <PaymentMethod/>
    <Card_payment/>
    <ResultCalendar/>
  
    </>

  
  )

}

export default App;


// react will  pickup whatever inbetween the custom component
// i.e custom element and assign it to the children key
//<Forms> custom element </Forms>
// the logic and style is same without rewriting 

// you can same state some for username ans password for both login and signup
// the main purpose is reusability of code



// whatever in between the <function>  in between</function>
// it will come as a children in children props

