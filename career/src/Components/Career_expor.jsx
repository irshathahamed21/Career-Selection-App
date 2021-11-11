import axios from "axios";
import React from "react";
import "./Intrest.css"
import {Button} from "@mui/material"
import Btn from "./Intrest_btn"
export default function Careerexlporation(){
return(
<>
    <div className="Container_mobile">
    <div>
      navbar
    </div>
 
    <div className="title_parent_div">
        <div className="vector_title_div">
        <img className="title_vector" src="images/Vector.png" alt="" />
        </div>
       
    </div>
    <div className="line_ar-r">
   {/* <img className="line_ar_r_img" src="images/line.png" alt="" /> */}
   </div>
    <div className="career_p_div">
        <p className="exporation_title">Road Map for Career Exploration</p>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src="/Images/yes_tick.png" alt="" /></div>
        <div className="info_div"><p className="list_info">1. Go through the recommended career fields.</p></div>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src="/Images/yes_tick.png" alt="" /></div>
        <div className="info_div"><p className="list_info">2. Dive deep into the careers that excite you a lot.</p></div>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src="/Images/yes_tick.png" alt="" /></div>
        <div className="info_div"><p className="list_info">3. Choose 3 out of them.</p></div>
    </div>
    <div className="list_div" >
        <div className="yes_tick_div"><img  className="yes_tick" src="/Images/yes_tick.png" alt="" /></div>
        <div className="info_div"><p className="list_info"> 4. Get a deeper understanding of those careers by attending</p>
        <ul>
            <li><p className="list_info">live interactive sessions with the professionals,</p></li>
            <li><p className="list_info">joining boot camps and</p></li>
            <li><p className="list_info">job shadowing.</p></li>
        </ul></div>
    </div>
    <div className="list_div">
        <div className="yes_tick_div"><img  className="yes_tick" src="/Images/yes_tick.png" alt="" /></div>
        <div className="info_div"><p className="list_info">5. Take a career assessment to measure your capabilities and work on it.</p>
       
        </div>
    </div>
    <div className="expore">
            <Button className="exp_btn"><p className="exp_btn_title">Lets Get Started</p></Button>
        </div>
    </div>
</>
)}