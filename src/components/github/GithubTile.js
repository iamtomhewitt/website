import React from 'react';
import { Textfit } from 'react-textfit';
import PropTypes from 'prop-types';

import './GithubTile.css';

const GithubTile = (props) => {
  const {
    name, language, description, bugs, stars, forks, url,
  } = props;

  return (
    <div className="repo">
      <div>
        <div className="name"><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></div>
        <div className="language">{language}</div>
      </div>
      
      <div className="description">
        <Textfit
          mode="multi"
          forceSingleModeWidth={false}
          throttle={50}
          style={{ height: 85 }}
          max={20}
        >
          {description}
        </Textfit>
      </div>

	  <ul className="stats" key={name}>
        <li>
          <span role="img" aria-label="bug">🐛</span>
          {` ${bugs}`}
        </li>
        <li>
          <span role="img" aria-label="star">⭐️</span>
          {` ${stars}`}
        </li>
        <li>
          <span role="img" aria-label="fork and knife">🍴</span>
          {` ${forks}`}
        </li>
      </ul>
    </div>
  );
};

GithubTile.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string.isRequired,
  bugs: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

GithubTile.defaultProps = {
  language: '',
};

export default GithubTile;
