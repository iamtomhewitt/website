import React from 'react';

import './Home.scss';

const Home = () => (
  <div className="home">
    <div className="content">
      <div className="text">
        <h1>
          Hi, I'm
          <span className="highlight">&nbsp;Tom</span>
          !
        </h1>
        <h2>Software Developer</h2>
        <p>
          I currently work at William Hill, working towards
          <span className="highlight">&nbsp;full-stack development</span>
          , on terminal software for betting shops.
        </p>
        <div className="spotify">
          <h4>Top Spotify Artists</h4>
          <ul>
            <li>Enter Shikari</li>
            <li>Eminem</li>
            <li>STARSET</li>
            <li>The Naked And Famous</li>
            <li>Biffy Clyro</li>
          </ul>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/home.png`} alt="" />
    </div>
  </div>
);

export default Home;
