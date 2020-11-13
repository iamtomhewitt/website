import React from 'react';
import PropTypes from 'prop-types';
import {
  Bug, Star, StarMobile, Fork, ForkMobile, BugMobile,
} from '../icons';
import './GithubTile.scss';

const GithubTile = (props) => {
  const {
    repo: {
      name, language, description, forks, open_issues_count: issues, html_url: url, stargazers_count: stars,
    },
    getClass,
    isMobile,
  } = props;

  return (
    <div className={getClass('repo')}>
      <div className={getClass('details')}>
        <div className={getClass('name')}><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></div>
        <div className={getClass('language')}>{language}</div>
        <ul className={getClass('stats')} key={name}>
          <li>
            <a href={`https://github.com/iamtomhewitt/${name}/issues`}>
              {isMobile ? <BugMobile /> : <Bug />}
              <span>{issues}</span>
            </a>
          </li>
          <li>
            <a href={`https://github.com/iamtomhewitt/${name}/stargazers`}>
              {isMobile ? <StarMobile /> : <Star />}
              <span>{stars}</span>
            </a>
          </li>
          <li>
            <a href={`https://github.com/iamtomhewitt/${name}/network/members`}>
              {isMobile ? <ForkMobile /> : <Fork />}
              <span>{forks}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={getClass('description')}>{description}</div>

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
  getClass: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

GithubTile.defaultProps = {
  repo: { language: '' },
};

export default GithubTile;
