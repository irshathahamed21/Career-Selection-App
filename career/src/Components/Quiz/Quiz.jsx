import styled from "styled-components";
import Group from "./Group.svg"
import Frame59 from "./Frame59.svg";
//import {Link} from "react-router-dom"
import { useLocation ,useHistory} from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
const HeaderNavbar = styled.header`


.img_rajnish{
    position: absolute;
    left: 25.72%;
    right: 40.11%;
    top: 17.95%;
    bottom: 71.79%;
}
.image1{
    position: absolute;
    width: 160px;
    height: 160px;
    left: 29%;
    top: 15%;
    
    /* Light Green */
    
    background: rgba(98, 142, 98, 0.2);
    border-radius: 50%;
}
.start{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 10px;
    margin-top:100px;
    position: absolute;
    width: 80%;
    height: 15px;
left: calc(50% - 310px/2);
top: calc(50% - 48px/2 - 112px);
border:none;
/* green */
color:white;
background: #628E62;
border-radius: 5px;
}
.test{
    position: absolute;
    width: 312px;
    height: 32px;
    left: 42px;
    top: 350px;
    
    font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 131.69%;
/* identical to box height, or 32px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Primary Black */

color: #3C4852;

}
.frame{
    position: absolute;
    width: 312px;
    height: 204px;
    left: 24px;
    top: 400px;

    
    border-radius: 5px;
}
.paragraph{
    position: absolute;
    width: 312px;
    height: 480px;
    left: 23px;
    top: 540px;
    text-align: justify;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 131.69%;
    /* or 24px */

display: flex;
align-items: center;
//letter-spacing: -0.02em;

/* Primary Black */

color: #3C4852;
}
`;
//<Link to="/Quiz/Page1">Start</Link>
export default function HeaderNav() {

    const location = useLocation();
let token=location.search
console.log(token);
let history = useHistory();

    return <HeaderNavbar>
    <div><Navbar /></div>
        <div className="image1">
   
    </div>
    <img className="img_rajnish" src={Group}/>
    <button onClick={()=>{
  history.push({
      pathname: '/Quiz/Page1',
    search:token,// query string
    state: {  // location state
        update: true, 
    },
  });
}} 
className="start">Start</button>
    <div className="test">How a Intrest Test Can Help</div>
    <iframe className="frame" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
<p className="paragraph">There are a variety of free career tests and    quizzes available addressing one or more of these factors, but it is not essential to find a test that captures all of the elements. Do keep in mind that some tests aren't scientifically validated. However, they are quick and easy to take and provide insight into what types of jobs you might want to research. Spend some time taking a few tests and quizzes and see what results you get. Afterwards, compare the job options you're given to decide if any of them are worth exploring further through reading, informational interviews, job shadowing, and internships.</p>
    </HeaderNavbar>
};

//<Link to="/Quiz/Page1"></Link>