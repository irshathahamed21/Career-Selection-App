import styled from "styled-components";
import {Link} from "react-router-dom"
import { useLocation ,useHistory} from 'react-router-dom';
const Navbar = styled.header`
.lesser{
    position: absolute;
    width: 40px;
    height: 40px;
    left:20px;
     top: 50px; 
     color:grey; 
}
.bigbar{
    width:70%;
    height:10px;
    background-color:grey;
    border-radius:5px;
    margin-top:55px;
    margin-left:57px;
}
.big{
    width:70%;
    height:10px;
    background-color:green;
    border-radius:5px;
}
.number{
margin-left:55%;
margin-top:5px;
color:grey;
}
.question{
    position: absolute;
width: 312px;
height: 35px;
left: 54px;
top: 144px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 35px;
/* identical to box height, or 146% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #000000;
}
.box{
    position: absolute;
    width: 70%;
    height: 230px;
    left: 54px;
    top: 235px;
    border-color: coral;
    border:1px solid;
    box-shadow: 
    padding: 25px;
    box-shadow: 0px -30px 5px #888;
}
.buttons{
    display:flex;
    flex-direction:column;
    align-items: center;
    gap: 20px;
   
}
.buttons button{
    width: 150px;
    height: 40px;
    color:green;
    border-radius:50px;
    text-decoration:none;
    font-size: 16px;
    border:none;
}
.final{
    width:280px;
    height:30px;
    color:green;
    font-size:16px;
    border-radius:50px;
    border:1px solid grey;
    margin-top:430px;
    margin-left:40px;
    text-align:center;
    padding-top:10px;
}
`;

export  function Page7() {

    const location = useLocation();
    let token=location.search
    console.log(token);
    let history = useHistory();

    return <Navbar>
           <div  onClick={()=>{
  history.push({
    pathname: '/Quiz/Page6',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}}className="lesser">{"<"}</div>
           <div className="bigbar"><div className="big"></div></div>
           <div className="number">7/10</div>
           <div className="question">Tell us What facinates You</div>
           <div className="box">
            <h3>Do you like cooking?</h3>
            <div className= "buttons">
            <button onClick={()=>{
  history.push({
    pathname: '/Quiz/Page8',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}}>Yes</button>
            <button onClick={()=>{
  history.push({
    pathname: '/Quiz/Page8',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}}>No</button>
            </div>
           </div>
           <div className="final">View Result</div>
    </Navbar>
};