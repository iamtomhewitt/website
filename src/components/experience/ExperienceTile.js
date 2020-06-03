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
    <div id="tile">
      <div id="quickInfo">
        <div id="details">
          <div id="jobTitle">{jobTitle}</div>
          <div id="company">{company}</div>
          <div id="time">{time}</div>
        </div>
        <div id="image">
          <img src={logo} alt="img" />
        </div>
      </div>
      <div id="description" style={style}>{description}</div>
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
