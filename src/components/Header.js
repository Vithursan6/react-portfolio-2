import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import "animate.css";

const Header = () => {
  return (
    <div id='home' className="header-wrapper">
        <div className="main-info">
            <h1>Web Development Services</h1>
            <Typed 
                className="typed-text"
                strings={["Hello, I'm Vithursan.", "A full stack developer.", "Have a look at my work!"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <Link to="contacts" offset={-60} className="animate__animated animate__flipInX animate__slow btn-main-offer">Contact Me</Link>
        
        </div>
    </div>
  )
}

export default Header;
