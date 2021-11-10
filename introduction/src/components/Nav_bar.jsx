
import education from "./home_public/Education_icon.png"

import sideicon from "./home_public/sidebar_icon.png"

import styled from "styled-components"

import {sidebar} from "./sidebar"

const Div =  styled.div`
    
    height:50px;
    width:90%;
    margin:auto;
    & > .first-photo {
        min-width:10%;
        float:left;
        height:100%;
        
    }
    & > .second-photo {
        min-width:5%;
        float:right;
        height:100%;
        rotate:270deg
    }


`

function openNav() {
    return (
        <sidebar/>
    )
  }

  
function closeNav() {
    return (
        <Navbar/>
    )
  }



function Navbar() {

    return (
        <Div>
            

        <img className = "first-photo" src = {education} alt = "logo" />
        <div></div>
        <img onclick="openNav()" className = "second-photo" src = {sideicon} alt = "icon" />

        </Div>
        
        


        
    )
}

export {Navbar}