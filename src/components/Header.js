import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Web Development Services</h1>
            <Typed 
                className="typed-text"
                strings={["Hello, I'm Vithursan.", "A full stack developer.", "Have a look at my work!"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="#" className="btn-main-offer">Contact Me</a>
        
        </div>
    </div>
  )
}

export default Header;
