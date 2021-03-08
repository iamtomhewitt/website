import React from 'react';
import PropTypes from 'prop-types';
import jobs from '../../data/experience.json';

import './Experience.scss';

const Experience = ({ reference }) => (
  <div className="experience" ref={reference}>
    <h2>I've worked at</h2>
    <hr />
    <div className="row">
      {jobs.map(({ jobTitle, company, time, description }) => (
        <div className="job" key={time}>
          <span className="title">{jobTitle}</span>
          <span className="company">{company}</span>
          <span className="time">{time}</span>
          <span className="description">{description}</span>
        </div>
      ))}
    </div>
  </div>
);

Experience.propTypes = {
  reference: PropTypes.object,
};

export default Experience;
