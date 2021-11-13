import React from "react";
import './navbar.css';
import Rr from "../Quiz/LOGO (2).png"
import RR from "../Quiz/24px ICONES.png"
const Navbar = () => {
    return (
        <div className="nav">
            <img className="logo" src={Rr} alt="logo" />
            <img className="menu" src={RR} alt="menu" />
        </div>
    );
}
export default Navbar;