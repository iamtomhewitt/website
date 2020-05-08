import React, { Component } from "react";
import GithubTile from './GithubTile';

import "./Github.css";

export default class Github extends Component {

	constructor() {
		super();
		this.state = {
			repos: []
		};
	}

	componentDidMount() {
		fetch("https://api.github.com/users/iamtomhewitt/repos")
			.then(response => response.json())
			.then(data => this.setState({ repos: data }));
	}

	render() {
		if (this.state.repos.length > 0) {
			return (
				<div>
					<h1>I've built</h1>

					<div className="reposContainer">
						{this.state.repos.map((repo) => {
							return <GithubTile
								key={repo.name}
								name={repo.name}
								language={repo.language}
								description={repo.description}
								bugs={repo.open_issues}
								stars={repo.stargazers_count}
								forks={repo.forks}
								url={repo.html_url}
							/>
						})}
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="noRepos">
					<h1>I've built</h1>
					<p>No repos found <span role="img" aria-label="crying face">😢</span></p>
				</div>
			);
		}
	}
}
