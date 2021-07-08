import React from 'react';
import Tilt from 'react-tilt';
import FR from './FR.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="tilt-logo">
        <p className="title f2">FaceSmart</p>
      <Tilt
        className="Tilt"
        options={{
          reverse: false,
          max: 35,
          perspective: 1000,
          scale: 0.9,
          speed: 300,
          transition: true,
          reset: true,
          easing: 'cubic-bezier(.03,.98,.52,.99)',
        }}
        style={{
          height: 250,
          width: 250,
        }}
      >
        <span className="Tilt-inner pa4" role="img" aria-label="logo">
          <img style={{ height: "190px"}} alt="logo" src={FR} />
        </span>
      </Tilt>
    </div>
  );
};

export default Logo;
