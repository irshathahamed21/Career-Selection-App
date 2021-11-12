import React from "react";
import "./Intrest.css"
import {useHistory} from 'react-router-dom';

export default function Flashexpo(){
let history = useHistory()
    return(
        <>
        <div onClick={()=>{
  history.push("/Careerexploration");
       }} className="falsh_contaner_ro">
            <img className="flash_img_ro" src="Images/fetti.png" alt="" />
        <div className="Flash_div_ro">
            <div className="flash_title_div_ro">
            <p className="Flash_title_ro">Bravo ! you have taken a big step towards your bright future.</p>
            </div>
        </div>
        </div>
        </>
    )
}