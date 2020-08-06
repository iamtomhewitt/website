import React from 'react';
import PropTypes from 'prop-types';

import './ExperienceTile.scss';

const ExperienceTile = (props) => {
  const {
    jobTitle, company, time, description, fontSize,
  } = props;

  return (
    <li className="tile">
      <div >
        <div className="date">{time}</div>
        <div className="icon"></div>
        <div className="details">
          <div className="jobTitle">{jobTitle}</div>
          <div className="company">{company}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </li>
  );
};

ExperienceTile.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

export default ExperienceTile;
