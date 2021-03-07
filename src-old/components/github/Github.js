import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GithubTile from './GithubTile';

import './Github.scss';

export default class Github extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      repos: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/iamtomhewitt/repos?sort=updated')
      .then((response) => response.json())
      .then((data) => this.setState({ repos: data, loading: false }));
  }

  render() {
    const { repos, loading } = this.state;
    const { getClass, isMobile } = this.props;
    if (repos && !loading) {
      return (
        <div className={getClass('github')} test-id="github">
          <div className={getClass('content')}>
            <h1>
              I've
              <span className="highlight">&nbsp;built</span>
              ...
            </h1>

            {repos.map((repo) => (
              <GithubTile key={repo.name} repo={repo} getClass={getClass} isMobile={isMobile} />
            ))}
          </div>
        </div>
      );
    }

    if (loading) {
      return (
        <div className={getClass('github')} test-id="loading">
          <div className={getClass('content')}>
            <p>Loading...</p>
          </div>
        </div>
      );
    }

    return (
      <div className={getClass('github')} test-id="no-data">
        <div className={getClass('content')}>
          <h1>
            I've
            <span className="highlight">&nbsp;built</span>
            ...
          </h1>

          <p>No repos found.</p>
        </div>
      </div>
    );
  }
}

Github.propTypes = {
  getClass: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
