import React from 'react';
import PropTypes from 'prop-types';

import './ExperienceTile.css';

const ExperienceTile = (props) => {
  const {
    jobTitle, company, time, logo, description, fontSize,
  } = props;

  const style = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div className="tile">
      <div className="quickInfo">
        <div className="details">
          <div className="jobTitle">{jobTitle}</div>
          <div className="company">{company}</div>
          <div className="time">{time}</div>
        </div>
        <div className="image">
          <img src={logo} alt="img" />
        </div>
      </div>
      <div className="description" style={style}>{description}</div>
    </div>
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
