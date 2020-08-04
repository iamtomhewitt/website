import React from 'react';

import Navigation from '../navigation/Navigation';
import './Home.scss';

const Home = () => (
  <div className="home">
    <Navigation />
    <div className="content">
      <div className="text">
        <h1>
          Hi, I'm
          <span className="highlight"> Tom</span>
          !
        </h1>
        <h2>Software Developer</h2>
        <p>
          I currently work at William Hill, working towards
          <span className="highlight">full-stack development</span>
          , on betting terminal software for betting shops.
        </p>
      </div>

      <div className="image">
        <img src={`${process.env.PUBLIC_URL}/images/Me.jpg`} alt="" />
      </div>
    </div>
  </div>
);

export default Home;
