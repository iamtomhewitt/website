import React from 'react';

import './Intro.scss';

const Intro = () => (
  <div className="intro">
    <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="" />
    <h2>Tom Hewitt</h2>
    <hr />
    <h4>Software Developer</h4>
    <div className="icons">
      <a href="https://github.com/iamtomhewitt"><img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg" /></a>
      <a href="http://instagram.com/iamtomhewitt"><img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg" /></a>
      <a href="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/"><img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg" /></a>
      <a href="https://stackoverflow.com/users/3002268/tom?tab=profile"><img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/stackoverflow.svg" /></a>
    </div>
  </div>
);

export default Intro;
