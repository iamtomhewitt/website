import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

export default class Footer extends Component {
	render() {
		const style = { height: 60, width: 60 }
		return (
			<div className="Footer">
				<hr />
				<SocialIcon style={style} className="icon" fgColor="#FFF" url="http://github.com/iamtomhewitt" />
				<SocialIcon style={style} className="icon" fgColor="#FFF" url="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/" />
				<SocialIcon style={style} className="icon" fgColor="#FFF" url="http://instagram.com/iamtomhewitt" />
				<SocialIcon style={style} className="icon" fgColor="#FFF" url="https://www.youtube.com/channel/UCKP2LhsWT2UdXfUgY_yb8iw?" />
				<SocialIcon style={style} className="icon" fgColor="#FFF" url="https://stackoverflow.com/users/3002268/tom?tab=profile" />
			</div>
		);
	}
}