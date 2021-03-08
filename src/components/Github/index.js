import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from '../LoadingIcon';
import { Bug, Fork, Star } from '../icons';

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
    const { reference } = this.props;

    return (
      <div className="github" ref={reference}>
        <h2>I've built</h2>
        <hr />
        {loading && <div style={{ textAlign: 'center' }}><LoadingIcon /></div>}

        {!loading && !repos.length && <div style={{ textAlign: 'center' }}>Woops, something went wrong!</div>}

        {!loading && repos.length
          && (
            <div className="row">
              {repos.map(({ name, language, description, forks, open_issues_count: issues, html_url: url, stargazers_count: stars }) => (
                <div className="repo" key={name}>
                  <div className="title"><a href={url}>{name}</a></div>
                  <div className="language">{language}</div>
                  <div className="stats">
                    <li className="issues">
                      <a href={`https://github.com/iamtomhewitt/${name}/issues`}>
                        <Bug />
                        {issues}
                      </a>
                    </li>
                    <li className="stars">
                      <a href={`https://github.com/iamtomhewitt/${name}/stargazers`}>
                        <Star />
                        {stars}
                      </a>
                    </li>
                    <li className="forks">
                      <a href={`https://github.com/iamtomhewitt/${name}/network/members`}>
                        <Fork />
                        {forks}
                      </a>
                    </li>
                  </div>
                  <div className="description">{description}</div>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}

Github.propTypes = {
  reference: PropTypes.object,
};
