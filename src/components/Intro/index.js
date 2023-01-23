import React from 'react';
import PropTypes from 'prop-types';

import './Intro.scss';

const Intro = ({ reference }) => (
  <div className="intro" ref={reference}>
    <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="" />
    <h2>Tom Hewitt</h2>
    <hr />
    <h4>Principal Developer</h4>
    <div className="icons">
      <a href="https://github.com/iamtomhewitt"><img alt="Github" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg" /></a>
      <a href="http://instagram.com/iamtomhewitt"><img alt="Instagram" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg" /></a>
      <a href="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/"><img alt="LinkedIn" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg" /></a>
      <a href="https://stackoverflow.com/users/3002268/tom?tab=profile"><img alt="StackOverflow" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/stackoverflow.svg" /></a>
    </div>
  </div>
);

Intro.propTypes = {
  reference: PropTypes.object,
};

export default Intro;
