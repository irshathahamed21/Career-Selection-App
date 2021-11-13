import styled from "styled-components";
import {Link} from "react-router-dom"
import { useLocation ,useHistory} from 'react-router-dom';
import Frame79 from "./Frame79.svg"
import Ellipse163 from "./Ellipse163.svg"
import raj from "./raj.svg"
const Navbar = styled.header`
    .Woohoo{
        position: absolute;
width: 261px;
height: 108px;
left: 49px;
top: 86px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* or 150% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Primary Black */

color: #3C4852;
    }
    .career{
        position: absolute;
width: 110px;
height: 36px;
left: 24px;
top: 235px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 36px;
/* identical to box height, or 225% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Primary Black */

color: #3C4852;

    }
    .see{
        position: absolute;
width: 48px;
height: 36px;
left: 288px;
top: 235px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 36px;
/* identical to box height, or 225% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* green */

color: #628E62;

    }
    .img1{
        position: absolute;
width: 360px;
height: 231px;
left: -1px;
top: 271px;
overflow-x: scroll;
    }
    .session{
        position: absolute;
width: 312px;
height: 84px;
left: 24px;
top: 485px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Primary Black */

color: #3C4852;
    }
    .img2{
        position: absolute;
width: 189px;
height: 174px;
left: 90px;
top: 600px;

background: url(.png);
    }
    .book{
        position: absolute;
width: 278px;
height: 42px;
left: 41px;
top: 726px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Primary Black */

color: #3C4852;
    }
    button{
        display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;

position: absolute;
width: 312px;
height: 41px;
left: 24px;
top: 766px;

/* green */

background: #628E62;
border-radius: 5px;
    }
    .elipse{
        position: absolute;
width: 176px;
height: 174px;
left: 106px;
top: 600px;

//background: #FFB600;
    }
    .lesser{
        position: absolute;
        width: 40px;
        height: 40px;
        left:20px;
         top: 100px; 
         color:grey; 
      }
`;

export  function Started() {

    const location = useLocation();
    let token=location.search
    console.log(token);
    let history = useHistory();

    return <Navbar>
        <div onClick={()=>{
  history.push({
    pathname: '/Quiz/Career',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}} className="lesser">{"<"}</div>
        <h1 className="Woohoo">Woohoo..! We have found 136 career matching your interest.</h1>
        <p className="career">Career Matches</p>
        <p onClick={()=>{
  history.push({
    pathname: '/Quiz/Map',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}} className="see">See All</p>
        <img className="img1" src={Frame79}></img>
        <h1 className="session">You Can take a counselling session with our exoerts for more clarity</h1>
        <div>
            <img className="elipse" src={Ellipse163}/>
        <img className="img2" src={raj}></img>
        </div>
        <p className="book">Book your seat for free counselling session</p>
        <button><Link to="/Quiz/">Book Now</Link></button>
    </Navbar>
};