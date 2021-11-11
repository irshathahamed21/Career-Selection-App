import axios from "axios";
import React from "react";
import "./Intrest.css"
import {Button} from "@mui/material"
import Btn from "./Intrest_btn"
export default function Intrest(){
    
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
    <div className="title_div">
    <p className="intrest_title_wlcm">Tell us about yourself!</p>
        <p className="sign_title">What you’re interested in?</p>
        </div>
        <div className="btn_div">
            <Btn  label={"Business"} />
            <Btn label={"Design"} />
            <Btn label={"Science"} />
            <Btn label={"Gardening"} />
            <Btn label={"IT & Software"} />
            <Btn label={"Dancing"} />
            <Btn label={"Music"} />
            <Btn label={"3d Anmation"} />
            <Btn label={"Langages"} />
            <Btn label={"Doctor"} />
            <Btn label={"Math"} />
            <Btn label={"CID"} />
            <Btn label={"Cricket"} />
            <Btn label={"Photography"} />
            <Btn label={"Teaching"} />
            <Btn label={"Art"} />
        </div>
        <div className="expore">
            <Button className="exp_btn"><p className="exp_btn_title">Explore</p></Button>
        </div>
        <div className="donw_ar_div">
        <img className="title_vector_down" src="images/Vector_down.png" alt="" />
        </div>
  
    {/* <div className="Container_mobile_gray"> */}
    <div className="gray_div">
        <p className="intrest_title">I don’t know my interest!</p>
        </div>
  
    <div className="gray_div">
        <p className="intrest_info">Take a small test to understand what you may like or is possible for you to go forward with.</p>
        </div>
    </div>
</>    
)} 