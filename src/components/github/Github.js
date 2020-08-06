import React, { Component } from 'react';
import GithubTile from './GithubTile';

import './Github.scss';

export default class Github extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/iamtomhewitt/repos?sort=updated')
      .then((response) => response.json())
      .then((data) => this.setState({ repos: data }));
  }

  render() {
    const { repos } = this.state;
    if (repos.length > 0) {
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

    return (
      <div className="Github">
        <h1>I've built</h1>
        <p>
          {'No repos found '}
          <span role="img" aria-label="crying face">😢</span>
        </p>
      </div>
    );
  }
}
