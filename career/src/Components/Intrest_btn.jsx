import axios from "axios";
import React from "react";
import "./Intrest.css"
import {Button} from "@mui/material"

export default function Btn({label,value,Intrests_career,setIntrests_career}){

    const [flag1,setFlag1]= React.useState(false)

    return(
        <>
         <Button 
         className={flag1? "css-1e6y48t-MuiButtonBase-root-MuiButton-root":"css-1e6y48t-MuiButtonBase-root-MuiButton-root_2" } 
         onClick={()=>{
            setFlag1(!flag1);
        if(flag1){
            setIntrests_career((prev) => ({ ...prev, [value]: "false", }));
        }else
        {setIntrests_career((prev) => ({ ...prev, [value]: "true", }));}
             }}><p className={flag1? "btn_title":"btn_title_unclick" }>{label}</p></Button>
        </>
    )
}