import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data/home.json';

import './Home.scss';

const Home = (props) => {
  const { isMobile, getClass } = props;

  return (
    <div className={getClass('home')} test-id='home'>
      <div className={getClass('content')}>
        <div className={getClass('text')}>
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
          <div className={getClass('spotify')}>
            <h4>Top Spotify Artists</h4>
            <ul>
              {data.spotify.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        </div>
        {!isMobile && <img src={`${process.env.PUBLIC_URL}/images/home.png`} alt="" />}
      </div>
    </div>
  );
};

Home.propTypes = {
  getClass: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Home;
