

import styled from "styled-components"


const Button = styled.button`
    border: 1px solid green;
    color:green;
    min-width:30%;
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
        width:30%;
        padding-top:2%;
        padding-bottom:2%;
        margin:2%;
        /* border: 2px solid brown */
        
        
    }
   


`


function Expertdetails({details}) {



    return (
        <>
        <Div>
          
        <div className = "box">
        <div> <img src= {details.Image} alt = "image" /></div>
            <div >{details.Name}</div>
            <div>{details.type}</div>
            <div>{details.experience}</div>
            <div><Button> Check Availability</Button></div>
        </div>
        </Div>


        </>
    )
    
}
export {Expertdetails}