import React from 'react';
import data from '../../data/home.json';

import './About.scss';

const About = () => (
  <div className="about">
    <h2>About Me</h2>
    <hr />
    <p>
      I currently work at William Hill, working towards being a
      <span className="highlight">&nbsp;full-stack development</span>
      , on terminal software for betting shops.
    </p>
    <div className="spotify">
      <h4>Top Spotify Artists</h4>
      <ul>
        {data.spotify.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  </div>
);

export default About;
