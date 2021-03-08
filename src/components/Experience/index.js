import React from 'react';
import jobs from '../../data/experience.json';

import './Experience.scss';

const Experience = () => (
  <div className='experience'>
    <h2>I've worked at</h2>
    <hr />
    <div className='row'>
      {jobs.map(({ jobTitle, company, time, description }) => (
        <div className='job'>
          <span className='title'>{jobTitle}</span>
          <span className='company'>{company}</span>
          <span className='time'>{time}</span>
          <span className='description'>{description}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;