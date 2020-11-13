import React from 'react';
import PropTypes from 'prop-types';
import {
  Building, Email, Github, Instagram, LinkedIn, Location, Stackoverflow, Tool, Work,
} from '../icons';
import './Navigation.scss';

const MobileLayout = () => (
  <div className="navigation-mobile">
    <div className="navigation-mobile">
      <ul className="navigation-mobile-icons">
        <li>
          <a href="https://github.com/iamtomhewitt">
            <Github />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/iamtomhewitt">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/3002268/tom?tab=profile">
            <Stackoverflow />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/">
            <LinkedIn />
          </a>
        </li>
      </ul>

      <hr />

      <ul className="navigation-mobile-icons">
        <li>
          <a href="#/experience">
            <Work />
          </a>
        </li>
        <li>
          <a href="#/github">
            <Tool />
          </a>
        </li>
        <li>
          <a href="#/contact">
            <Email />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const DesktopLayout = () => (
  <div className="navigation">
    <div className="navigation-profile">
      <a href="#/">
        <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="" />
      </a>
      <ul className="navigation-profile-info">
        <li>
          <Building />
          <span>William Hill</span>
        </li>
        <li>
          <Location />
          <span>Leeds</span>
        </li>
      </ul>
      <ul className="navigation-profile-info-icons">
        <li>
          <a href="https://github.com/iamtomhewitt">
            {' '}
            <Github />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/iamtomhewitt">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/3002268/tom?tab=profile">
            <Stackoverflow />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>

    <div className="navigation-links">
      <ul>
        <li><a href="#/experience">Experience</a></li>
        <li><a href="#/github">Github</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
    </div>
  </div>
);

const Navigation = (props) => {
  const { isMobile } = props;
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

Navigation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Navigation;
