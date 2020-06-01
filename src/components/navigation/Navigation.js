import React, { Component } from 'react';
import home from '../../images/home-icon.png';
import './Navigation.css'

export default class Navigation extends Component {
	render() {
		return (
			<div className="Navigation">
				<ul>
					<li><a href="#/"><img src={home} alt="img"></img></a></li>
					<li><a href="#/experience">EXPERIENCE</a></li>
					<li><a href="#/github">GITHUB</a></li>
					<li><a href="#/contact">CONTACT</a></li>
				</ul>
			</div>
		)
	}
}