
import {Plans} from "./Plans_data"
import left_arrow from "./home_public/24px ICONES.png"
import { useRef } from "react"
import {Expertlist} from "./Expert_list"
import {useState, useEffect} from "react"
import "./Booking.css"




function Booking() {
    let plans = [
        {
             off : 5,
             Duration: "1 month",
             Total: "3,000"
        },
        {
            off : 44,
            Duration: "6 month",
            Total: "6,000"
       },
        {
        off : 65,
        Duration: "Unlimited",
        Total: "9,999"
        },

    ]

    const[data, setData] = useState([])


    // useEffect (()=> {
        
    //   async function go() {
    //       const data = await fetch("http://localhost:2345/coach/item");

    //       const res = await data.json()
    //       setData(res)
    //       console.log(res)
    //   }
    //   go()
        
    //   },[]) // previously [] // now to run function on every time page variable changes we put page inside array
      
      
      
         
           


    return (
        <div className = "main-div" >
       
        <div className = "headin">
        <h4>
        <a href = "">
                <img className = "prev-link" src = {left_arrow} alt = ""/>

            </a>
             Meet our Experts
        </h4>
        </div>

        <div className = "experts-row">
        <Expertlist response = {data}/>
       
       
        

                 {/* <Expertlist response = {response} /> */}


        </div>



        <div className = "green-bg">
            <div className = "booking-para">
            You will need to take a plan for the one - on - one personalised session.So, that our experts can guide you throughout your journey and connect with them when ever required.

            </div>

     



        <div className = "flex-div">
          

         
            <Plans plan = {plans}/>
            
        </div>

        </div>
        </div>
       
    )
 



}
export {Booking}