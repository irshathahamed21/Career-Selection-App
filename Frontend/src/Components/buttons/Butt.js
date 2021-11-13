import React from "react";
import './butt.css';
import {useHistory} from 'react-router-dom';
const Butt = ({name}) => {
    let history=useHistory()
    return(
        <>
            <button onClick={()=>{
                        history.push("/Signup")
                    }} className="start_kal">{name}</button>
        </>
    )
}

export default Butt;