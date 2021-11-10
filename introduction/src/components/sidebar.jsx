
import styled from "styled-components"

const Div = styled.div`
width:100%;
height:70%;


`

const Div_links = styled.div`
    display:flex;
    
` 
const Link = styled.a`
    color:black;
`


function Sidebar () {
    return (
        <Div>
            <Div_links>
                <Link>  </Link>
                <Link > Profile</Link>
             </Div_links>
             <Div_links>
                <Link>  </Link>
                <Link > Take Career Assesment </Link>
             </Div_links>
             <Div_links>
                <Link>  </Link>
                <Link > Browse Careers</Link>
             </Div_links>
             <Div_links>
                <Link>  </Link>
                <Link >  Saved Careers</Link>
             </Div_links>
             <Div_links>
                <Link>  </Link>
                <Link >  Help and support </Link>
             </Div_links>

       </Div>
    )
}

export {Sidebar}