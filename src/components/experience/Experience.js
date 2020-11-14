import React from 'react';
import PropTypes from 'prop-types';
import ExperienceTile from './ExperienceTile';
import data from '../../data/experience.json';

import './Experience.scss';

const Experience = (props) => {
  const { isMobile, getClass } = props;

  return (
    <div className={getClass('experience')} test-id="experience">
      <div className={getClass('content')}>
        <h1>
          I've
          <span className="highlight">&nbsp;worked&nbsp;</span>
          at...
        </h1>
        <div className={getClass('timeline')}>
          <ul>
            {data.map((o, i) => (
              <ExperienceTile
                key={i}
                isMobile={isMobile}
                getClass={getClass}
                jobTitle={o.jobTitle}
                company={o.company}
                description={o.description}
                time={o.time}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  getClass: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Experience;
