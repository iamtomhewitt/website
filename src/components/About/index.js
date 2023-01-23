import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data/home.json';

import './About.scss';

const highlight = (text) => <span className="highlight">{text}</span>;

const About = ({ reference }) => (
  <div className="about" ref={reference}>
    <h2>About Me</h2>
    <hr />
    <p>I currently work at William Hill as a {highlight('Principal Developer')}, on a variety of frontend and backend projects. I also work with Gitlab Pipelines and build Slackbots to help with day to day work. I play {highlight('drums')} and love {highlight('racing in VR')}.</p>
    <div className="spotify">
      <h4>Top Spotify Artists</h4>
      <ul>
        {data.spotify.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  </div>
);

About.propTypes = {
  reference: PropTypes.object,
};

export default About;
