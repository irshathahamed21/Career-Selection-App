import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <img className="logo" src={require('../images/logo.jpeg').default} alt="logo" />
            <img className="menu" src={require('../images/menu.jpg').default} alt="menu" />
        </div>
    );
}
export default Navbar;