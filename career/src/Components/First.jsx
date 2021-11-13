import React from "react";
import './first.css';
import Butt from "./buttons/Butt";
import Explore from "./buttons/Explore";
import About from './About';
import Career3 from './Career3';
import Navbar from './Navbar';
import Read from "./buttons/Read";

const First = () => {
 
    return (
        <>
            <div className="c1">
                <Navbar />
                <img className="c1-image" src={require('../images/first.jpg').default} alt="education image" />
                <h1>Hi, There Confused about your Career.</h1>
                <p>No Worries! We are here to help you to choose a career that fits you well.</p>
                <div>
                  <Butt  name="Get started" />
                    <br />
                    <br />
                    <Explore name2="Explore more" />
                </div>
            </div>
            <div className="c2">
                <h3>Why  Education works?</h3>
                <p>Education works to help students to become self- aware and promises to handhold you throughout your career discovery journey from the time you sign up until you get into a career you love.</p>
            </div>
            <div>
                <div className="c3">
                    <img className="c3-image" src={require('../images/second.png').default} alt="Education image1" />
                </div>
                <p className="c3-p">There are more than 1000+ career opportunities already available.</p>
                <Read name1="Read More" />
            </div>
            <div>
                <div className="c4">
                    <img className="c4-image" src={require('../images/third.png').default} alt="Education image2" />
                </div>
                <div>
                    <p className="c3-p">Take a career assesment to understand your strengths and weaknesses</p>
                    <br />
                    <Butt name="Career Assesment" />
                    <br />
                    <br />
                    <Read name1="Read More" />
                </div>
            </div>
            <Career3 />
            <About />
        </>
    )
}

export default First;