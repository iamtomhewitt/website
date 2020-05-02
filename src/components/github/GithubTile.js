import React from 'react';
import { Textfit } from 'react-textfit';

import './GithubTile.css';

export default class GithubTile extends React.Component {
	render() {
		const { name, language, description, bugs, stars, forks, url } = this.props;

		return (
			<div className="repo" id="repo">
				<div>
					<div className="name"><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></div>
					<div className="language">{language}</div>
				</div>
				<ul className="stats" key={name}>
					<li><span role="img" aria-label="bug">🐛</span> {bugs}</li>
					<li><span role="img" aria-label="star">⭐️</span> {stars}</li>
					<li><span role="img" aria-label="fork and knife">🍴</span> {forks}</li>
				</ul>
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
			</div>
		)
	}
}