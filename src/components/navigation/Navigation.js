import React from 'react';
import PropTypes from 'prop-types';
import { Building } from '../icons/Building';
import { GithubIcon } from '../icons/Github';
import { InstagramIcon } from '../icons/Instagram';
import { LinkedInIcon } from '../icons/LinkedIn';
import { Location } from '../icons/Location';
import { StackoverflowIcon } from '../icons/Stackoverflow';
import './Navigation.scss';

const isActivePage = (current, link) => ((current === link) ? 'navigation-links-active' : 'navigation-links-inactive');

const Navigation = (props) => {
  const { currentPageName } = props;

  return (
    <div className="navigation">

      <div className="navigation-profile">
        <img src={`${process.env.PUBLIC_URL}/images/Me.jpg`} alt="" />
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
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="http://instagram.com/iamtomhewitt">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/3002268/tom?tab=profile">
              <StackoverflowIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>

      <div className="navigation-links">
        <ul>
          <li className={isActivePage(currentPageName, 'experience')}><a href="#/experience">Experience</a></li>
          <li className={isActivePage(currentPageName, 'github')}><a href="#/github">Github</a></li>
          <li className={isActivePage(currentPageName, 'contact')}><a href="#/contact">Contact</a></li>
        </ul>
      </div>

    </div>
  );
};

Navigation.propTypes = {
  currentPageName: PropTypes.string.isRequired,
};

export default Navigation;
