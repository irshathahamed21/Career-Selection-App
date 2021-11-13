
 //import { Button } from 'react-bootstrap';

import styled from "styled-components"

import right_arrow from "./home_public/right_arrow.png"
import card from "./home_public/card.png"
import card2 from "./home_public/convert-card.png"
import upi from "./home_public/wallet-money.png"
import left_arrow from "./home_public/24px ICONES.png"
import wallet from "./home_public/wallet.png"
import {Button} from "./Button"
// import {Totals} from ".Showplan"
import{useState} from "react"

import {prices} from "./Showplan"

const Div =  styled.div`
    width:90%;
    margin:auto;
    & button {
        text-align:center;
    }
    & .pay-link {
        display:flex;
        justify-content:space-between
    }
    & .pay-link img{
        margin-top:-2px;
        margin-right:10px;
        /* border:2px solid green; */
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
const Divi =  styled.div`
    font-size:16px;

    /* border:1px solid black; */
    padding:1%;


`
const Main_div = styled.div`
    width:30%;
    margin:auto;
`

function PaymentMethod() {
   const sum = prices() 
    const[price, setPrice] = useState(0)

    let ans = JSON.parse(localStorage.getItem("Total"))

    setPrice(ans)

     //console.log(sum)
    return (
        <>
        <Main_div>
        <hr/>
        <Div>
        <h4>
            <a href = "">
                <img className = "prev-link" src = {left_arrow} alt = ""/>

            </a>
            Choose a Payment method
           
        </h4>
        </Div>
        <hr/>
        <Div>
        <div className = "pay-link">
            <Divi className = "blacki">  <img src = {card} /> Card  </Divi>
            <Divi>
            <a href = "">
                <img src = {right_arrow} alt = ""/>

            </a>     
            </Divi>
           
        </div>
        </Div>
        <hr/>
        <Div>
        <div className = "pay-link">
            <Divi className = "blacki">  <img src = {card} /> Net banking </Divi>
            <Divi>
            <a href = "">
                <img src = {right_arrow} alt = ""/>

            </a>     
            </Divi>
           
        </div>
        </Div>
        <hr/>


        <Div>
        <div className = "pay-link">
            <Divi className = "blacki">  <img src = {upi} />  UPI </Divi>
            <Divi>
            <a href = "">
                <img src = {right_arrow} alt = ""/>

            </a>     
            </Divi>
           
        </div>
        </Div>
        <hr/>

        <Div>
        <div className = "pay-link">
            <Divi className = "blacki">  <img src = {wallet} />   Wallets </Divi>
            <Divi>
            <a href = "">
                <img src = {right_arrow} alt = ""/>

            </a>     
            </Divi>
           
        </div>
        </Div>
         <hr/>
       

        <Div>
        <div className = "pay-link">
            <Divi className = "blacki">  <img src = {card2} />   EMI </Divi>
            <Divi>
            <a href = "">
                <img src = {right_arrow} alt = ""/>

            </a>     
            </Divi>
           
        </div>
        </Div>
        <hr/>

            
           
          
            
        <Div>
        <Payment_details>
        <div className = "headi blacki" > Get one on one mentorship for a month</div>

        <div className = "dura-change">
        
            <Para> Valid till 2 Dec, 2021
            <Para className = "green-font right-float"> Change Duration </Para> 
            </Para>
        </div>
        <div className = "dura-changet">
            <Para> Subscription fee  <Para className = "right-float">  price</Para>
            </Para>
            
        </div>
        <hr/>
        <div className = "pay-flex">
            <div className = "blacki">Total <small className = "norma">  (Incl. of all taxes) </small> </div>
            <div className = "blacki">price </div>
        </div>
           
        </Payment_details>

        <Button>Pay</Button>

        </Div>

       


      
        </Main_div>


        </>
    )

}
export {PaymentMethod}