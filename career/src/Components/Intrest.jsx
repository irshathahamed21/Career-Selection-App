import axios from "axios";
import React from "react";
import "./Intrest.css"
import {Button} from "@mui/material"
import Btn from "./Intrest_btn"
import { useLocation } from 'react-router-dom';



export default function Intrest(){
const location = useLocation();
let token=location.search
let user_id=location.id
console.log('user_id:', user_id)
console.log("int",token);
const [Intrests,setIntrests]= React.useState({
    Business:"false",
    Design:"false",
    Science:"false",
    Gardening:"false",
    Software:"false",
    Dancing:"false",
    Music:"false",
    Anmation:"false",
    Langages:"false",
    Doctor:"false",
    Math:"false",
    CID:"false",
    Cricket:"false",
    Photography:"false",
    Teaching:"false",
    Art:"false",
})

async function receiver() { 
    
    try {
     await axios.petch(`http://localhost:2345/users/update/:${user_id}`,{},{ headers: {
        'Authorization': 'Bearer ' + token
      }}).then(res =>{console.log(res.data.token)})      

    } catch (error) {
    
    }
    }
const update=()=>{
    receiver()
}


return(
<>
    <div className="Container_mobile">
     
    <div>
      navbar
    </div>
    <div className="title_parent_div_intr">
        <div className="vector_title_div">
        <img className="title_vector" src="images/Vector.png" alt="" />
        </div>
       
    </div>
    <div className="title_div_intr">
    <p className="intrest_title_wlcm">Tell us about yourself!</p>
        <p className="intrest_selection_title">What you’re interested in?</p>
        </div>
        <div className="btn_div">
            <Btn value={"Business"}        label={"Business"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Design"}      label={"Design"}         Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Science"}      label={"Science"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Gardening"}      label={"Gardening"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Software"}    label={"IT & Software"}      Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Dancing"}      label={"Dancing"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Music"}      label={"Music"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Anmatio"}     label={"3d Anmation"}        Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Langages"}      label={"Langages"}         Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Doctor"}      label={"Doctor"}         Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Math"}      label={"Math"}         Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"CID"}      label={"CID"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Cricket"}      label={"Cricket"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Photography"}      label={"Photography"}       Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Teaching"}      label={"Teaching"}         Intrests={Intrests}     setIntrests={setIntrests}/>
            <Btn value={"Art"}      label={"Art"}       Intrests={Intrests}     setIntrests={setIntrests}/>
        </div>
        <div className="expore">
            <Button onClick={() => {
               
            }}
            className="exp_btn"><p className="exp_btn_title">Explore</p></Button>
        </div>
        <div className="donw_ar_div">
        <img className="title_vector_down" src="images/Vector_down.png" alt="" />
        </div>
       

    <div className="gray_div">
        <p className="intrest_title">I don’t know my interest!</p>
    </div>
    <div className="img_section">
    <img className="child_img" src="images/child.png" alt="" />
    <div className="img_div">  
    <div className="border_div2">
    <div className="border_div1">
    </div>
    </div>
    </div>
    </div>
    <div className="gray_div">
        <p className="intrest_info">Take a small test to understand what you may like or is possible for you to go forward with.</p>
        </div>
        <div className="expore">
            <Button className="exp_btn"><p className="exp_btn_title">Interest Test</p></Button>
        </div>
        </div>

</>    
)} 