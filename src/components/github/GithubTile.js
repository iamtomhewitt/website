import React from 'react';
import PropTypes from 'prop-types';
import { Bug, Star, Fork } from '../icons';
import './GithubTile.scss';

const GithubTile = (props) => {
  const {
    repo: {
      name, language, description, forks, open_issues_count: issues, html_url: url, stargazers_count: stars,
    },
  } = props;

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
  repo: PropTypes.shape({
    description: PropTypes.string,
    forks: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
    name: PropTypes.string.isRequired,
    open_issues_count: PropTypes.number.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

GithubTile.defaultProps = {
  repo: { language: '' },
};

export default GithubTile;
