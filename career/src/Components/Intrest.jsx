import axios from "axios";
import React,{ useRef }  from "react";
import "./Intrest.css"
import {Button} from "@mui/material"
import Btn from "./Intrest_btn"
import { useLocation,useHistory } from 'react-router-dom';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Intrest(){
const location = useLocation();
let token=location.search
token=token.substring(1)

const myRef = useRef(null)
const executeScroll = () => scrollToRef(myRef)


const [Intrests_career,setIntrests_career]= React.useState({
    "Business":"false",
    "Design":"false",
    "Science":"false",
    "Gardening":"false",
    "Software":"false",
    "Dancing":"false",
    "Music":"false",
    "Anmation":"false",
    "Langages":"false",
    "Doctor":"false",
    "Math":"false",
    "CID":"false",
    "Cricket":"false",
    "Photography":"false",
    "Teaching":"false",
    "Art":"false"
})

let history = useHistory();
async function receiver() { 
    try {
     await axios.patch(`http://localhost:2345/users/update`,{intrests:Intrests_career},{ headers: {
        'Authorization': 'Bearer ' + token
      }}).then(res =>{
       
        history.push({
        pathname: '/Careerexploration',
        search:token,
        state: {  
          update: true, 
        },
      });
    });
    } catch (error) {
        console.log(error);
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
        <img 
            onClick={()=>{
            // history.push({
            // pathname: '/Intrest',
            // search:token,// query string
            // state: {  // location state
            // update: true, 
            // }});
        }}
   className="title_vector" src="images/Vector.png" alt="" />
        </div>
       
    </div>
    <div className="title_div_intr">
    <p className="intrest_title_wlcm">Tell us about yourself!</p>
        <p className="intrest_selection_title">What you’re interested in?</p>
        </div>
        <div className="btn_div">
            <Btn value={"Business"}        label={"Business"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Design"}      label={"Design"}         Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Science"}      label={"Science"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Gardening"}      label={"Gardening"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Software"}    label={"IT & Software"}      Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Dancing"}      label={"Dancing"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Music"}      label={"Music"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Anmatio"}     label={"3d Anmation"}        Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Langages"}      label={"Langages"}         Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Doctor"}      label={"Doctor"}         Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Math"}      label={"Math"}         Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"CID"}      label={"CID"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Cricket"}      label={"Cricket"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Photography"}      label={"Photography"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Teaching"}      label={"Teaching"}         Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
            <Btn value={"Art"}      label={"Art"}       Intrests_career={Intrests_career}     setIntrests_career={setIntrests_career}/>
        </div>
        <div className="expore">
            <Button onClick={() => {
                console.log("btn");
               update()
            }}
            className="exp_btn"><p  className="exp_btn_title">Explore</p></Button>
        </div>
        <div className="donw_ar_div">
        <img onclick={executeScroll} className="title_vector_down" src="images/Vector_down.png" alt="" />
        </div>
       

    <div  className="gray_div" >
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
        <div ref={myRef} className="expore_test">
            <Button className="exp_btn"><p className="exp_btn_title">Interest Test</p></Button>
        </div>
        </div>

</>    
)} 