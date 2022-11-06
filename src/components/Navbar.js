import React from 'react';
//Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
import "animate.css";

const Navbar = () => {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className='container'>       
            <Link smooth={true} to='home' offset={-115} className="navbar-brand" href="#"><h1 className='animate__animated animate__flipInX animate__slow title1'>Vithursan Muthu</h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "rgb(97, 225, 123)" }} />
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown" aria-labelledby="navbarDropdownMenuLink">
                <ul className="navbar-nav ml-auto">
                <li className="animate__animated animate__flipInX animate__slow nav-item active">
                    <Link smooth={true} to='home' offset={-115} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <Link smooth={true} to='about' offset={-115} className="nav-link" href="#">About Me</Link>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <Link smooth={true} to='skills' offset={-120} className="nav-link" href="#">Skills</Link>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <Link smooth={true} to='experience' offset={-10} className="nav-link" href="#">Experience</Link>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <Link smooth={true} to='portfolio' offset={-85} className="nav-link" href="#">Projects</Link>
                </li>
                <li className="animate__animated animate__flipInX animate__slow nav-item">
                    <Link smooth={true} to='contacts' offset={-60} className="nav-link" href="#">Contact</Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
