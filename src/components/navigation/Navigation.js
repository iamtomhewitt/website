import React from 'react';
import { Building } from '../icons/Building';
import { GithubIcon } from '../icons/Github';
import { InstagramIcon } from '../icons/Instagram';
import { LinkedInIcon } from '../icons/LinkedIn';
import { Location } from '../icons/Location';
import { StackoverflowIcon } from '../icons/Stackoverflow';
import './Navigation.scss';

const Navigation = () => (
  <div className="navigation">

    <div className="navigation-profile">
      <a href="#/">
        <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="" />
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
        <li><a href="#/experience">Experience</a></li>
        <li><a href="#/github">Github</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
    </div>

  </div>
);

export default Navigation;
