import React from 'react';
import PropTypes from 'prop-types';

import './GithubTile.scss';
import { Bug } from '../icons/Bug';
import { Star } from '../icons/Star';
import { Fork } from '../icons/Fork';

const GithubTile = (props) => {
  const {
    repo: {
      name, language, description, forks,
    },
  } = props;

  const issues = props.repo.open_issues_count;
  const url = props.repo.html_url;
  const stars = props.repo.stargazers_count;

  return (
    <div className="repo">
      <div className="details">
        <div className="name"><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></div>
        <div className="language">{language}</div>
        <ul className="stats" key={name}>
          <li>
            <a href={`https://github.com/iamtomhewitt/${name}/issues`}>
              <Bug />
              <span>{issues}</span>
            </a>
          </li>
          <li>
            <a href={`https://github.com/iamtomhewitt/${name}/stargazers`}>
              <Star />
              <span>{stars}</span>
            </a>
          </li>
          <li>
            <a href={`https://github.com/iamtomhewitt/${name}/network/members`}>
              <Fork />
              <span>{forks}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="description">{description}</div>

    </div>
  );
};

GithubTile.propTypes = {
  repo: {
    name: PropTypes.string.isRequired,
    language: PropTypes.string,
    description: PropTypes.string.isRequired,
    open_issues_count: PropTypes.number.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  },
};

GithubTile.defaultProps = {
  repo: { language: '' },
};

export default GithubTile;
