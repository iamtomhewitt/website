import React from 'react';
import home from '../../images/home-icon.png';
import './Navigation.css';

const Navigation = () => (
  <div className="Navigation">
    <ul>
      <li><a href="#/"><img src={home} alt="img" /></a></li>
      <li><a href="#/experience">EXPERIENCE</a></li>
      <li><a href="#/github">GITHUB</a></li>
      <li><a href="#/contact">CONTACT</a></li>
      <li><a href="#/about">ABOUT</a></li>
    </ul>
  </div>
);

export default Navigation;
