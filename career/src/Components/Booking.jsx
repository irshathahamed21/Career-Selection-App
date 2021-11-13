
import {Plans} from "./Plans_data"
import left_arrow from "./home_public/24px ICONES.png"
import { useRef } from "react"
import {Expertlist} from "./Expert_list"
import {useState, useEffect} from "react"
import "./Booking.css"
import { useLocation,useHistory } from 'react-router-dom';



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
    const location = useLocation();
    let token=location.search
    token=token.substring(1)
    


     // now to run function on every time page variable changes we put page inside array
    
    //   useEffect(() => {
    //     console.log("abc")
    //     async function getData(){
    //         console.log("123")
    //         const res= await fetch("http://localhost:2345/coach/").then((d)=>
    //         d.json()
    //         );
    //         setData(res.item)
    //         console.log("abcd")
    //         console.log(res.item)
    //       }
  
    //     getData()
          
         
    //   }, [])
      
         
           


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
        {/* <Expertlist  /> */}
       
       
        

                 {/* <Expertlist response = {response} /> */}


        </div>
        
        <div className = "parag">
            Make the best use of your first
            </div>



        <div className = "green-bg">
            <div className = "booking-para">
            You will need to take a plan for the one - on - one personalised session.So, that our experts can guide you throughout your journey and connect with them when ever required.

            </div>

     



        <div className = "flex-div">
          

         
            <Plans plan = {plans} token={token}/>
            
        </div>

        </div>
        </div>
       
    )
 



}
export {Booking}