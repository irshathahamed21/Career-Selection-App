import styled from "styled-components";
import {Link} from "react-router-dom"
import Navbar from "../Navbar/Navbar"

import { useLocation ,useHistory} from 'react-router-dom';
// import Frame80 from "./Frame 80.svg"
// import Vediocards  from "./Vedio Cards.svg"
// import Vediocards2  from "./Vedio Cards (2).svg"
// import Vediocards3  from "./Vedio Cards (3).svg"
// import Vediocards4  from "./Vedio Cards (4).svg"
const nav = styled.header`
.carrer{
  position: absolute;
width: 312px;
height: 36px;
left: 44px;
top: 54px;
  font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;
/* Primary Black */
color: #3C4852;
}
.all{
    position: absolute;
width: 68px;
height: 36px;
left: 44px;
top: 92px;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
/* identical to box height, or 200% */
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;
/* Primary Black */
color: #3C4852;
}
.img1{
    position: absolute;
width: 360px;
height: 175px;
left: 0px;
top: 130px;
overflow-x: scroll;
}
.top{
    position: absolute;
width: 172px;
height: 36px;
left: 24px;
top: 268px;
  font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
}
.img2{
    position: absolute;
width: 312px;
height: 100px;
left: 20px;
top: 325px;
/* 10 % HEADER SHADOW */
filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
}
.img3{
      position: absolute;
width: 312px;
height: 100px;
left: 20px;
top: 425px;
/* 10 % HEADER SHADOW */
filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
}
.img4{
      position: absolute;
width: 312px;
height: 100px;
left: 20px;
top: 525px;
/* 10 % HEADER SHADOW */
filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
}
.img5{
      position: absolute;
width: 312px;
height: 100px;
left: 20px;
top: 625px;
/* 10 % HEADER SHADOW */
filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
}div{
}
.link{
    top: 930px;
    color:green;
    left: 180px;
}
`;
export default function Careermenu() {
    const location = useLocation();
    let token=location.search
    console.log(token);
    let history = useHistory();
    return <nav>
      <div><Navbar /></div>
       <h3 className="carrer">All Career Matches</h3>
       <p className="all">All field</p>
      <img  className="img1" src="/Images/Frame 80.svg"></img>
       <p className="top">Top selection for you</p>
       <div onClick={()=>{
  history.push({
    pathname: '/Careervid',
    search:token,// query string
    state: {  // location state
      update: true,
    },
  });
}}> <img className="img2" src="/Images/Vedio Cards.svg"></img> </div>
       <img className="img3" src="/Images/Vedio Cards (1).svg"></img>
        <img className="img4" src="/Images/Vedio Cards (2).svg"></img>
          <img className="img5" src="/Images/Vedio Cards (3).svg"></img>
    </nav>
};