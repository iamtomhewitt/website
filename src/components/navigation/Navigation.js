import React from 'react';
import './Navigation.scss';
import { HyperlinkIcon } from '../icons/Hyperlink';
import { Building } from '../icons/Building';
import { Location } from '../icons/Location';

const Navigation = props => {

	const { currentPageName } = props;

	return (
		<div className="navigation">

			<div className="navigation-profile">
				<img src={`${process.env.PUBLIC_URL}/images/Me.jpg`} alt="" />
				<ul className="navigation-profile-info">
					<li><HyperlinkIcon/><span><a href="https://github.com/iamtomhewitt">Github</a></span></li>
					<li><Building/><span>William Hill</span></li>
					<li><Location/><span>Leeds</span></li>
				</ul>
			</div>

			<div className="navigation-links">
				<ul>
					<li>Experience</li>
					<li>Github</li>
					<li>Contact</li>
				</ul>
			</div>

		</div>
	);
}

export default Navigation;
