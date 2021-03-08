import React from 'react';
import data from '../../data/home.json';

import './About.scss';

const highlight = (text) => <span className="highlight">{text}</span>

const About = () => (
  <div className="about">
    <h2>About Me</h2>
    <hr />
    <p>
      I currently work at William Hill, working towards being a {highlight('full stack developer')}, on terminal software for betting shops. I play {highlight('drums')} and love {highlight('virtual reality gaming')}.
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
