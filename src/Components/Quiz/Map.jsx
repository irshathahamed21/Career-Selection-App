import styled from "styled-components";
import {Link} from "react-router-dom"
import { useLocation ,useHistory} from 'react-router-dom';
import Group336 from "./Group 336.svg"
import Vector55 from "./Vector 55.svg"
const Navbar = styled.header`
@media(max-width: 600px) { 
    /* btn_txt_capitalization */
.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
         text-transform: capitalize !important;
         background-color: #628E62 !important;
         width: auto !important;
         height: 41px !important;
         border-radius: 50px !important;
         border:1px solid #628E62 !important;
         margin: 4% 5% 0% 0% !important;
}
/* btn onclick  */
.css-1e6y48t-MuiButtonBase-root-MuiButton-root_2{
    text-transform: capitalize !important;
    background-color: #FFFFFF !important;
    width: auto !important;
    height: 41px !important;
    border-radius: 50px !important;
    border:1px solid #628E62 !important;
    margin: 4% 5% 0% 0% !important;
}
/* expolore btn */
.exp_btn{
    text-transform: capitalize !important;
    background-color: #628E62 !important;
    width: 54% !important;
    height: 48px     !important;
    padding: 16px 10px !important;
    left: 25.06% !important;
right: 18.06% !important;
top: 42.09% !important;
bottom: 54.16% !important;
text-align: center;
margin-top:-10px;
    border-radius: 50px !important;
    border:1px solid #628E62 !important;
    margin: 4% 5% 0% 0% !important;
}
.Container_mobile {
    width: 100%;
    
    
}
.title_parent_div_intr{
    padding: 0% 5% 4% 5%;
    width: 90%;
    display: flex;
    flex-direction: row;
   }
.vector_title_div{
   padding: 3% 10% 0% 0%;
}
.title_vector{
    float: left;
    position: absolute;
     width: 10px;
     height: 15px;
     float: left;
}
.intrest_title_wlcm{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 131.69%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    margin: 4% 0% 4% 0%;
    padding:0% 0% 0% 0%;
    color: #3C4852; 
  }
  /* .sign_title{
    font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.02em;
color: #3C4852;
    margin:0% 0% 0% 0%;
    padding:0% 0% 0% 0%;
} */
.title_div_intr{
    padding: 0% 5% 4% 5%;
    width: 90%;
    display: column;
    flex-direction: row;
}
.btn_title{
    font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 131.69%;
display: flex;
align-items: center;
letter-spacing: -0.02em;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
}
.btn_title_unclick{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 131.69%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #628E62;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
}
.pad{
    padding: 0% 5% 4% 5%;
}
.exp_btn_title{
    position: static;
width: auto;
height: 16px;
left: 92.5px;
top: 16px;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;
/* Pure White */
color: #FFFFFF;
}
.expore {
    margin-top: 10%;
    
}
.Container_mobile_gray{
    position: absolute;
width: 100%;
height: 730.78px;
left: 0px;
top: 551.22px;
background: rgb(251, 251, 253);
background: linear-gradient(262deg, rgba(118,120,226,0.2) 36%, rgba(161,121,226,0.2)  81.48%);  
}
.donw_ar_div{
    text-align: center;
    padding: 8% 5% 0% 5%;
    width: 90%;
}
.title_vector_down{
position: absolute;
width: 18px;
height: 8px;
}
.gray_div{
    padding: 0% 5% 0% 5%;
    margin: 0% 0% 0% 0%;
    width: 90%;
}
.intrest_title{
    width: 100%;   
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    color: #3C4852;
    padding: 0% 0% 0% 0%;
    margin: 0% 0% 0% 0%;
}
.intrest_info{
    width: 82%;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 131.69%;
    padding: 0% 9% 0% 9%;
    margin: 0% 0% 0% 0%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    color: #3C4852;
}
.img_div{
    padding: 0% 30% 0% 30%;
    margin: 0% 0% 0% 0%;
    width: 40%;
 
}
.border_div1{
    width: 102%;
    height: 151px;
    margin: 8% 0% 0% -10%;
    background: #FFB600;
}
.border_div2{
    width: 102%;
    padding: 0% 0% 0% 0%;
height: 151px;
border: 1px solid #FFB600;
box-sizing: border-box;
}
.child_img{
    height: 26%;
    margin: 3% 0% 0% 7%;
    width: 75%;
    position: absolute;
}
.img_section{
    margin-top:8%;
    margin-bottom:15%;
}
/* career exploration  */
.career_p_div{
    padding: 0% 5% 4% 5%;
    width: 90%; 
}
.exporation_title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    /* width: 100%; */
    justify-content: center;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 58%;
    letter-spacing: -0.02em;
    color: #3C4852;
    margin: 0% 1% 0% 19%;
    padding: 0% 0% 0% 0%;
}
.intrest_selection_title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    width: 100% !important;
    /* justify-content: center; */
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 58%;
    letter-spacing: -0.02em;
    color: #3C4852;
    margin: 0% 1% 0% 0%;
    padding: 0% 0% 0% 0%;
}
.list_info{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 137.19%;
    display: flex;
    width: 84%;
    align-items: center;
    letter-spacing: -0.02em;
    color: #3C4852;
    margin: 0% 0% 0% 0%;
    padding: 0% 0% 0% 0%;
}
.yes_tick{
    height: 30px;
    width: 30px;
}
.yes_tick_div{
    height: 30px;
        width: 30px;
        margin: 0% 6% 0% 0%;
        padding: 0% 0% 0% 0%;
}
.list_div{
    padding: 0% 5% 4% 5%;
    width: 90%; 
    display: flex;
    flex-direction: row
}
.info_div{
    margin: 0% 0% 0% 0%;
    padding: 0% 0% 0% 0%;
}
.line_ar-r{
    margin: -21% 0% 0% 9%;
    position: absolute;
}
.line_ar_r_img{
    margin-top: 187px;
    height: 328px;
}
}
`;

export  function Map() {

    const location = useLocation();
    let token=location.search
    console.log(token);
    let history = useHistory();

    return <Navbar>
         <>
    <div className="Container_mobile">
    <div>
      navbar
    </div>
 
    <div className="title_parent_div">
        <div className="vector_title_div">
        <img className="title_vector" src={Vector55} alt="" />
        </div>
       
    </div>
    <div className="line_ar-r">
   {/* <img className="line_ar_r_img" src="images/line.png" alt="" /> */}
   </div>
    <div className="career_p_div">
        <p className="exporation_title">Road Map for Career Exploration</p>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src={Group336} alt="" /></div>
        <div className="info_div"><p className="list_info">1. Go through the recommended career fields.</p></div>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src={Group336} alt="" /></div>
        <div className="info_div"><p className="list_info">2. Dive deep into the careers that excite you a lot.</p></div>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src={Group336} alt="" /></div>
        <div className="info_div"><p className="list_info">3. Choose 3 out of them.</p></div>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src={Group336} alt="" /></div>
        <div className="info_div"><p className="list_info"> 4. Get a deeper understanding of those careers by attending</p>
        <ul>
            <li><p className="list_info">live interactive sessions with the professionals,</p></li>
            <li><p className="list_info">joining boot camps and</p></li>
            <li><p className="list_info">job shadowing.</p></li>
        </ul></div>
    </div>
    <div className="list_div">
        <div className="yes_tick_div"><img  className="yes_tick" src={Group336} alt="" /></div>
        <div className="info_div"><p className="list_info">5. Take a career assessment to measure your capabilities and work on it.</p>
       
        </div>
    </div>
    <div className="expore">
            <button className="exp_btn"><p onClick={()=>{
  history.push({
    pathname: '/Quiz/Started',
    search:token,// query string
    state: {  // location state
      update: true, 
    },
  });
}} className="exp_btn_title">Let get started</p></button>
        </div>
    </div>
</>
    </Navbar>
};