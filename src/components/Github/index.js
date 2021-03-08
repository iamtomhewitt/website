import React, { Component } from 'react';
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

    if (repos && !loading) {
      return (
        <div className="github">
          <h2>I've built</h2>
          <hr />
          <div className="row">
            {repos.map(({
              name, language, description, forks, open_issues_count: issues, html_url: url, stargazers_count: stars,
            }) => (
              <div className="repo">
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
        </div>
      );
    }
    return null;
    // if (repos && !loading) {
    //   return (
    //     <div className='github'>
    //       <div className= 'content'>
    //         <h1>
    //           I've
    //           <span className="highlight">&nbsp;built</span>
    //           ...
    //         </h1>

    //         {/* {repos.map((repo) => (
    //           <GithubTile key={repo.name} repo={repo} isMobile={isMobile} />
    //         ))} */}
    //       </div>
    //     </div>
    //   );
    // }

    // if (loading) {
    //   return (
    //     <div className= 'github' test-id="loading">
    //       <div className= 'content'>
    //         <p>Loading...</p>
    //       </div>
    //     </div>
    //   );
    // }

    // return (
    //   <div className= 'github' test-id="no-data">
    //     <div className= 'content'>
    //       <h1>
    //         I've
    //         <span className="highlight">&nbsp;built</span>
    //         ...
    //       </h1>

    //       <p>No repos found.</p>
    //     </div>
    //   </div>
    // );
  }
}
