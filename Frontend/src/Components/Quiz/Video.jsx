import styled from "styled-components";
import {Link} from "react-router-dom"
import { useLocation ,useHistory} from 'react-router-dom';
const Navbar = styled.header`
.frame{
    position: absolute;
width: 360px;
height: 204px;
left: 0px;
top: 0px;

background: #000000;
}
.air{
    position: absolute;
width: 197px;
height: 23px;
left: 24px;
top: 220px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 23px;
/* identical to box height, or 144% */

display: flex;
align-items: center;
letter-spacing: -0.02em;

/* Primary Black */

color: #3C4852;

}
.ready{
    position: absolute;
width: 312px;
height: 216px;
left: 28px;
top: 249px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 24px;
/* or 171% */
text-align: justify;
display: flex;
align-items: center;
letter-spacing: -0.02em;
//text-decoration-line: underline;

/* Primary Black */

color: #3C4852;

}
.qua ,.qua1 ,.qua2 ,.qua3 ,.qua4{
    position: absolute;
width: 312px;
height: 504px;
left: 24px;

text-align: justify;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 24px;
//letter-spacing: 105px;
/* or 171% */

display: flex;
align-items: center;
letter-spacing: -0.02em;
//text-decoration-line: underline;

/* Primary Black */

color: #3C4852;
}
.qua{
    top:250px;
}
.qua1{
    top:275px;
}
.qua2{
    top:300px;
}
.qua3{
    top:350px;
}
.qua4{
    top:500px;
}
.lesser{
    position: absolute;
    width: 40px;
    height: 40px;
    left:0px;
     top: 210px; 
     color:grey; 
}
`;

export  function Videobar() {

    const location = useLocation();
    let token=location.search
    console.log(token);
    let history = useHistory();

    return <Navbar>
        <iframe className="frame" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
<div onClick={()=>{
  history.push({
    pathname: '/Quiz/Career',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}} className="lesser">{"<"}</div>
<h2 className="air">What is Airfield Operations ?</h2>
<p className="ready">READY FOR TAKEOFF & LANDING
The management of their runways is as important as managing the people who run them. Airfield Operations Officers do both and also work as a liaison with anyone who needs to access the airfield for any reason. Their duties include ensuring the safe takeoff and landing of aircraft, maintaining navigational aids, performing inspections and communicating with air traffic control.</p>
<p className="qua"> QUALIFICATIONS</p>
<p className="qua1"> SUMMARY
 MINIMUM EDUCATION </p>
 <p className="qua2">Must have a Bachelor’s degree </p>
 <p className="qua3">QUALIFICATIONS</p> 
 <p className="qua4">Must be between the ages of 18 and 39 A minimum of 24 months’ experience performing and managing Airfield Operations Must be willing to relocate Knowledge of capabilities, limitations and basic operating principles of aircraft systems and components Knowledge of Air Traffic Control principles and procedures Must maintain Ground-based Aircraft Controller Medical standards Completion of Airfield Operations Officer Qualification Training Course Completion of Officer Training School (OTS), Air Force Academy (AFA) or Air Force Reserve Officer Training Corps (AFROTC)</p>
    </Navbar>
};