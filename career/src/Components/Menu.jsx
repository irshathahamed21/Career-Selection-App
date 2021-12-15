import React from "react";
import './menu.css';

const Menu = () => {
    return (
        <>
            <div className="menu">
                <div className="nav">
                    <img className="logo" src={require('../images/logo.jpeg').default} alt="logo" />
                    <img className="cross" src={require('../images/cross.jpg').default} alt="menu" />
                </div>
                <div className="v1">
                    <button>^</button>
                    <p>Profile</p>
                    <img className="icon" src={require('../images/myicon.jpg').default} alt="Profile" />
                </div>
                <div className="v2">
                    <button>^</button>
                    <p>Take Career Assesment</p>
                </div>
                <div className="v3">
                    <button>^</button>
                    <p>Browse Careers</p>
                </div>
                <div className="v4">
                    <button>^</button>
                    <p>Saved Careers</p>
                </div>
                <div className="v5">
                    <button>^</button>
                    <p>Help & Support</p>
                </div>
            </div>
        </>
    )
}

export default Menu;