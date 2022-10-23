import React from 'react';
//Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "animate.css";

const Navbar = () => {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>       
            <a className="navbar-brand" href="#"><h1 className='animate__animated animate__flipInX animate__slow title1'>Vithursan Muthu</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "rgb(97, 225, 123)" }} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="animate__animated animate__flipInX animate__slow nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <a className="nav-link" href="#">About Me</a>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <a className="nav-link" href="#">Skills</a>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <a className="nav-link" href="#">Experience</a>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
