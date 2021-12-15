import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="c6">
            <div className="cont1">
                <p>About us</p>
                <button className="but1">+</button>
            </div>
            <div className="cont2">
                <p>Success stories</p>
                <button className="but2">+</button>
            </div>
            <div className="cont3">
                <p>Get Expert Support</p>
                <button className="but3">+</button>
            </div>
            <div className="cont4">
                <p>How we can Help!</p>
                <button className="but4">+</button>
            </div>
            <p className="cont5">©  2021,EDUCATION. All rights reserved.</p>
            <div className="cont6">
                <div>Disclaimer</div>
                <div>|</div>
                <div>Privacy Policy</div>
                <div>|</div>
                <div>Terms of Services</div>
            </div>
        </div>
    )
}

export default About;