import React from 'react';
import './Navigation.scss';
import PropTypes from 'prop-types';
import { HyperlinkIcon } from '../icons/Hyperlink';
import { Building } from '../icons/Building';
import { Location } from '../icons/Location';

const isActivePage = (current, link) => ((current === link) ? 'navigation-links-active' : 'navigation-links-inactive');

const Navigation = (props) => {
  const { currentPageName } = props;

  return (
    <div className="navigation">

      <div className="navigation-profile">
        <img src={`${process.env.PUBLIC_URL}/images/Me.jpg`} alt="" />
        <ul className="navigation-profile-info">
          <li>
            <HyperlinkIcon />
            <span><a href="https://github.com/iamtomhewitt">Github</a></span>
          </li>
          <li>
            <Building />
            <span>William Hill</span>
          </li>
          <li>
            <Location />
            <span>Leeds</span>
          </li>
        </ul>
      </div>

      <div className="navigation-links">
        <ul>
          <li className={isActivePage(currentPageName, 'experience')}>Experience</li>
          <li className={isActivePage(currentPageName, 'github')}>Github</li>
          <li className={isActivePage(currentPageName, 'contact')}>Contact</li>
        </ul>
      </div>

    </div>
  );
};

Navigation.propTypes = {
  currentPageName: PropTypes.string.isRequired,
};

export default Navigation;
