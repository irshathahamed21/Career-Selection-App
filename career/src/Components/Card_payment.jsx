import styled from "styled-components"
// import Cleave from 'cleave.js/react';
import left_arrow from "./home_public/24px ICONES.png"

import { useLocation,useHistory } from 'react-router-dom';
import {Button} from "./Button"

const Div =  styled.div`
    width:90%;
    margin:auto;
    & input {
        width:100%;
        padding:3%;
        padding-left:5%;
        
    }

    &  .card-flex {
        display:flex;
        flex-direction:column;
        margin-top:5%;
        margin-bottom:5%;
        gap:15px;
    }
    & .valid {
        width:100%;
        border:1px ridge black;
        padding:3%;
        padding-left:5%;
        display:flex;
        justify-content: space-between;
    }
    & .prev-link  {
        margin-top:-2px;
        margin-right:3%;
    }
    & .blacki {
        color:black;
        font-weight:500;
    }
    & .norma {
        color:black;
        font-weight:300;
    }
   
    
`


const Payment_details = styled.div`
    width:100%;
    & .headi {
        font-size:16px;
        padding-top:1%
    }
    & .green-font {
        color:green;
        
       
    }
    & .right-float {
        float:right;
        clear:both;

    }
    & .pay-flex {
        display:flex;
        width:100%;
        justify-content: space-between;
    }
    & .dura-change {
        margin-top:3%;
        margin-bottom:3%;
    }
    & .dura-changet {
        margin-top:8%;
        margin-bottom:5%;
    }
`

const Para = styled.p`
    font-size:13px;
    /* border:1px solid black; */
    

`

const Main_div = styled.div`
    width:30%;
    margin:auto;
`





function Cardpayment() {
    const location = useLocation();
    let token=location.search
    let Rs=location.rs
    let history= useHistory();
    return (
        <>
        <Main_div>
            <hr/>
        <Div>
        <h4>
        <a href = "">
                <img className = "prev-link" src = {left_arrow} alt = ""/>

            </a>
             Pay through card
        </h4>
        </Div>
        <Div>

        <div className = "card-flex">

       
       <input type = "text" placeholder = "Card number"/>


        <div className = "valid">   
           <div>   <label>Validthrough</label></div>   

           <div>

                   <select > 
                    <option value="">MM</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>

                    <select>
                      <option value="">YY</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                    </div>
                    
                    </div>
         
         <input type="password" placeholder="CVV" required/>
         <input type="password" placeholder="Name on card" required/>
                
         </div>
         </Div>
               
                
          

            





        <Div>
      
    <Payment_details>
        <div className = "headi blacki" > Get one on one mentorship for a month</div>

        <div className = "dura-change">
        
            <Para> Valid till 2 Dec, 2021
            <Para className = "green-font right-float"> Change Duration </Para> 
            </Para>
        </div>
        <div className = "dura-changet">
            <Para> Subscription fee  <Para className = "right-float">{"Rs"+Rs}</Para>
            </Para>
            
        </div>
        <hr/>
        <div className = "pay-flex">
            <div className = "blacki">Total <small className = "norma">  (Incl. of all taxes) </small> </div>
            <div className = "blacki">{"Rs"+Rs}</div>
        </div>
      
       
        
    
           
        </Payment_details>


        <Button onClick={()=>{alert(`Booking is successfully done`) 
        history.push({
            pathname: '/',
            state: {  
              update: true, 
            },
          })
    }}>Pay</Button>
    
   
   




        </Div>
        </Main_div>
        
        </>
    )
    
}
export {Cardpayment}