import React, { useState, useEffect } from 'react';
import "./VideoStyles.css";
import { Link } from "react-router-dom";

import bgVideo from "../assets/videos/bg-art.mp4";
import fallbackImage from '../assets/fallback.jpg';


// const Video = () => {
//     return (
//         <div className="hero">
//             <video autoplay playsinline muted loop id="video" poster='../assets/fallback.jpg'>
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


const Video = () => {
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Check if the device is in low power mode
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsLowPowerMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', (event) => setIsLowPowerMode(event.matches));

    // Check if the video can play
    const video = document.createElement('video');
    video.addEventListener('canplaythrough', () => {
      setCanPlayVideo(true);
    });
    video.src = bgVideo;
  }, []);

  return (
    <div className="hero">
      {isLowPowerMode || !canPlayVideo ? (
        <img className='fallback' src={fallbackImage} alt="Fallback Image" />
      ) : (
        <video autoPlay loop muted playsInline id="video" poster={fallbackImage}>
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
};

export default Video;
