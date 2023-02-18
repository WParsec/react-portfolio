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

function Video() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const video = document.getElementById('video');
    const fallbackImage = document.getElementById('fallback-image');

    const onLoad = () => {
      setLoading(false);
    };

    const onError = () => {
      setLoading(false);
      fallbackImage.style.display = 'block';
    };

    video.addEventListener('loadeddata', onLoad);
    video.addEventListener('error', onError);

    return () => {
      video.removeEventListener('loadeddata', onLoad);
      video.removeEventListener('error', onError);
    };
  }, []);

  return (
    <div className="hero">
      {loading && (
        <div className="spinner">
          <div className="spinner-icon"></div>
        </div>
      )}
      {lowPowerMode ? (
        <img
          src="../assets/fallback.jpg"
          alt="Fallback Image"
          id="fallback-image"
          style={{ display: loading ? 'none' : 'block' }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          id="video"
          poster="../assets/fallback.jpg"
          style={{ display: loading ? 'none' : 'block' }}
        >
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
