import React, { Component } from 'react';
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
    if (repos && !loading) {
      return (
        <div className="github">
          <div className="content">
            <h1>
              I've
              <span className="highlight">&nbsp;built</span>
              ...
            </h1>

            <div className="repos">
              {repos.map((repo) => (
                <GithubTile key={repo.name} repo={repo} />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="github">
          <div className="content">
            <p>Loading...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="github">
        <div className="content">
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
