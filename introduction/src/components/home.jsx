
import styled from "styled-components"

import photo1 from "./home_public/photo1.png"
import photo2 from "./home_public/photo2.png"
import photo3 from "./home_public/photo3.png"
import {Navbar} from "./Nav_bar"

const Div = styled.div`
    max-width:90%;
    margin:auto;
    border:2px ridge black;
    
    & > div {
        min-width:50%;
        margin:auto;
        border: 2px ridge red;
        margin-bottom:3%;

    }
    & img {
        min-width:40%;
        margin-left:30%;
        margin-right:30%;
        
        border:2px solid brown;
    }
    & .education {
       
    }
    & > div > p {
        margin-left:6%;
        margin-right:6%;
        font-size:24px;
        text-align:center;
    }
    h1, h2 {
        margin-left:6%;
        margin-right:6%;
        font-size:28px;
        text-align:center;

    }
   


`

        const Education = styled.div`
        

        margin-top:6%;
        margin-bottom:6%;
        background-color:grey;
        transform: translate(0px, 4%) rotate(3deg);
      
        min-height:500px;

        & > div {
            padding-top:2.5%;
            margin-left:20%;
            margin-right:20%;
            text-align:center;
            transform: translate(0px, 4%) rotate(-3deg);
            font-size:1.5em;
            /* border: 2px solid black; */


            
        }
       
        


`




function Home() {

    return (
        <>
        
        <Navbar/>

        <Div>
                      
            <div>
                 <img alt ="" src = {photo1} />
                
                <h1>Hi, There Confused 
                    about your Career
                </h1>
                <p> No Worries! We are here to help you to 
                    choose a career that fits you well
                    
                </p>
            </div>
            </Div>


            <Education>
                <div>


                <h2> Why Education works?</h2>
                <p>Education works to help students to become self- aware and promises to handhold you throughout your career discovery journey from the time you sign up until you get into a career you love.


                </p>
                </div>
               
            </Education>
            


            <Div>
            <div>
                <img src ={photo2} alt =""/>
               
               
                <p>
                There are more than 1000+ career opportunities already available.
                </p>
            </div>



            <div>
                <img src ={photo3} alt ="homepage photo1"/>
            
                <p> 
                Take a career assesment to understand your strengths and weaknesses

                    
                </p>
            </div>


            <div>
                <p>
                Education already helped 10+ million people along their journey

                </p>
            </div>
            </Div>

            
        </>
    )

}

export {Home}