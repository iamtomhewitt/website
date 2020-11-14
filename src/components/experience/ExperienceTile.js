import React from 'react';
import PropTypes from 'prop-types';

import './ExperienceTile.scss';

const MobileLayout = (props) => {
  const {
    jobTitle, company, time, description, getClass,
  } = props;

  return (
    <li className={getClass('tile')} test-id="experience-tile-mobile">
      <div className="icon" />
      <div className={getClass('details')}>
        <div className={getClass('company')}>{company}</div>
        <span className="date">{time}</span>
        <div className={getClass('job-title')}>{jobTitle}</div>
        <div className="description">
          {description.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

const DesktopLayout = (props) => {
  const {
    jobTitle, company, time, description, getClass,
  } = props;

  return (
    <li className={getClass('tile')} test-id="experience-tile-desktop">
      <span className="date">{time}</span>
      <div className="icon" />
      <div className={getClass('details')}>
        <div className={getClass('company')}>{company}</div>
        <div className="job-title">{jobTitle}</div>
        <div className="description">
          {description.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

// eslint-disable-next-line
const ExperienceTile = (props) => (props.isMobile ? <MobileLayout {...props} /> : <DesktopLayout {...props} />);

DesktopLayout.propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  getClass: PropTypes.func.isRequired,
  jobTitle: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

MobileLayout.propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  getClass: PropTypes.func.isRequired,
  jobTitle: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

ExperienceTile.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default ExperienceTile;
