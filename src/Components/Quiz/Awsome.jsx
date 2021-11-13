import styled from "styled-components";
import {Link} from "react-router-dom"
import { useLocation ,useHistory} from 'react-router-dom';
import awsome from "./awsome.svg"
const Navbar = styled.header`
img{
    position: absolute;
width: 238px;
height: 211px;
left: 61px;
top: 78px;
}
h1{
    position: absolute;
width: 207px;
height: 56px;
left: 87px;
top: 273px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 56px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Cute Yellow */

color: #FFB600;
}
p{
    position: absolute;
    left: 87px;
top: 323px;
font-family: Roboto;
font-style: normal;
font-weight: 200;
font-size: 48px;
line-height: 56px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;
color: pink;
}
`;

export  function Awsome() {

    const location = useLocation();
    let token=location.search
    console.log(token);
    let history = useHistory();

    return <Navbar>
         <img src={awsome}></img>
         <h1>Awesome</h1>
         <p onClick={()=>{
  history.push({
    pathname: '/Quiz/Map',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}}>Continue</p>
    </Navbar>
};