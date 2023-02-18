import React, { useState, useEffect } from 'react';
import "./VideoStyles.css";
import { Link } from "react-router-dom";

import bgVideo from "../assets/videos/bg-art.mp4";

// const Video = () => {
//     return (
//         <div className="hero">
//             <video autoPlay loop muted playsInline id="video">
//                 <source src={bgVideo} type="video/mp4" />
//             </video>
//             <div className="hero-content">
//                 <div className="hero-text">
//                     <p className="signature">Tom Ertvaag</p>
//                     <h1>Design & Development</h1>
//                 </div>
//                 <div className="hero-btns">
//                     <Link to="/projects" className="btn">Projects</Link>
//                     <Link to="/contact" className="btn">Contact</Link>
//                     <Link to="/about" className="btn">About</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Video;


function Video() {
    const [lowPowerMode, setLowPowerMode] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
      setLowPowerMode(mediaQuery.matches);
  
      const handleChange = (event) => {
        setLowPowerMode(event.matches);
      };
  
      mediaQuery.addEventListener('change', handleChange);
  
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }, []);
  
    return (
      <div className="hero">
        {lowPowerMode ? (
          <img src="../assets/bg-static.jpg" alt="Fallback Image" />
        ) : (
          <video autoPlay loop muted playsInline id="video">
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}
        <div className="hero-content">
          <div className="hero-text">
            <p className="signature">Tom Ertvaag</p>
            <h1>Design & Development</h1>
          </div>
          <div className="hero-btns">
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn">
              Contact
            </Link>
            <Link to="/about" className="btn">
              About
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Video;
  
