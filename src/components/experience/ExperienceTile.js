import React from 'react';
import PropTypes from 'prop-types';

import './ExperienceTile.scss';

const ExperienceTile = (props) => {
  const {
    jobTitle, company, time, description,
  } = props;

  return (
    <li className="tile">
      <span className="date">{time}</span>
      <div className="icon" />
      <div className="details">
        <div className="company">{company}</div>
        <div className="job-title">{jobTitle}</div>
        <div className="description">
          {description.split('\n').map((item) => (
            <span>
              {item}
              <br />
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

ExperienceTile.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceTile;
