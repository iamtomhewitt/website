import React from 'react';

import './ExperienceTile.css';

export default class ExperienceTile extends React.Component {
	render() {
		var fontSize = {
			fontSize: this.props.fontSize + 'px'
		};
		return (
			<div id="tile">
				<div id="quickInfo">
					<div id="details">
						<div id="jobTitle">{this.props.jobTitle}</div>
						<div id="company">{this.props.company}</div>
						<div id="time">{this.props.time}</div>
					</div>
					<div id="image">
						<img src={this.props.logo} alt="img"></img>
					</div>
				</div>
				<div id="description" style={fontSize}>{this.props.description}</div>
			</div>
		)
	}
}