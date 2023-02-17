import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

// Imports css file
import "./NavbarStyles.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    

  return (
    <header>
       <div className="navbar">
        <Link to="/"><h2 className="logo">T.E</h2></Link>
        <ul className={click ? `nav-menu active` : `nav-menu`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={24} style={{color: "#fff"}}/> : <FaBars size={24} style={{color: "#fff"}}/>}
            </div>
        </div>
       </div>
    </header>
  );
}

export default Navbar;