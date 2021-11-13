import styled from "styled-components"

import { useRef,useState, useEffect } from "react"
// import {Total} from "Total"
const Button_book = styled.button`
    border: 1px solid green;
    color:green;
    min-width:80%;
    border-radius:20px;
    background-color:white;
    padding:1%;
    font-weight:500;

    &:hover {
        background-color:green;
        color:white;
    }

    
`

const Div = styled.div`
    
    width:100%;
    border: 2px solid blue;


    

    & .box {
       
        border-radius:5px;
        background-color:white;
        text-align:center;
        width:96%;
        padding-top:8%;
        padding-bottom:8%;
        margin:2%;
        /* border: 2px solid brown */
        
        
    }
    & .box > div , .Button_book {
        margin-top:3%;
        margin-bottom:3%;
      
    }
    & .details {
        background-color:orange;
        color:white;
        width:30%;
        margin:auto;
    }
    & .month {

    }
    & .price {
        font-size:26px;
        font-weight:500;
    }
    & .total {
        font-weight:500;
    }


`
function prices(a) {
    console.log(a)
    return a
}



function Showplans({details}) {
    const total = useRef(0)
    // const[price, setPrice] = useState("3000")
    
    const handleTotal = () => {
        total.current = details.Total
        console.log(total.current)
        
     let pric = total.current
     localStorage.setItem("Total", "pric")

    }
   


    // useEffect( ()=> {
    //     prices(price)
    // },[])
    
            
 //       total.current
        
        

    
  
    return (
        <>
        <Div>
        <div className = "box">  
        <div className = "details">{details.off}% OFF</div>
        <div className = "month" >{details.Duration}</div>
        <div className = "price">₹ {details.Total}</div>
        <div className = "total">Total (Incl. of all taxes)</div>
        <Button_book onClick = {handleTotal}> Get Subscription </Button_book>
        </div>  
        

        </Div>
        


        </>
        


    )
   
}

export {Showplans, prices}