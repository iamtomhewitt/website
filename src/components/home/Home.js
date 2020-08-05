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
      </div>

      <img src={`${process.env.PUBLIC_URL}/images/Me.jpg`} alt="" />
    </div>
  </div>
);

export default Home;
