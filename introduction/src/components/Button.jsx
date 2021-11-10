import styled from "styled-components"

export const Button = styled.button`

    padding:10px;
    color:green;
    border:1px ridge green;
    border-radius:3px;
    background-color:white;
    &:hover {
        background-color:green;
        color:white;
    }
    text-align:center;
    margin-top:5%;
    width:100%;
`






// & refers to the button element
 // in general & refers to the current element




// styled.div creates a div in app.js or where the file the function  Button is imported
// styled.button creates a button in app.js

