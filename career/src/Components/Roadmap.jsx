

import styled from "styled-components"

const Div = styled.div`
    width:90%;
    margin:auto;


`


function Roadmap() {
    return (
        <>
        <Div>
        <div>
            Road Map for 
            Career Exploration
        </div>
        <div>

        </div>

        <div>
           <ol>
           <li> Go through the recommended career fields. </li>
           <li> Dive deep into the careers that excite you a lot.  </li>
           <li> Choose 3 out of them. </li>
           <li> Get a deeper understanding of those careers by attending
               <ul>
                  <li>live interactive sessions with the professionals</li>
                  <li>joining boot camps and</li>
                  <li>job shadowing.</li> 
                </ul> 
            </li>
           <li>  Take a career assessment to measure your capabilities and work on it. </li>
          
           </ol>

        </div>
        </Div>



        </>
    )
}

export {Roadmap}