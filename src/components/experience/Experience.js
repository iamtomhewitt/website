import React from 'react';
import ExperienceTile from './ExperienceTile';
import wh from '../../images/william-hill.png';
import cgi from '../../images/cgi.png';
import ntu from '../../images/ntu.png';

import './Experience.css';

const Experience = () => (
  <>
    <div className="Experience">
      <h1>I've worked at</h1>
      <div className="tiles">
        <ExperienceTile
          jobTitle="Developer"
          company="William Hill"
          description="Working in Retail, currently working on the software for self service betting terminals. During the coronavirus outbreak I have been working on William Hill's Bingo website."
          time="Jul 2019 - Present"
          logo={wh}
          fontSize="16"
        />

        <ExperienceTile
          jobTitle="Graduate Developer"
          company="CGI"
          description="Responsible for an entire customer relationship type subsystem, using a variety of tools and software such as Java, SQL, JSP, Perl, Hibernate, VB, Remedy, Crystal Reports.
        Subsystem compromises of a workflow tool, an in-house website and a reporting tool."
          time="Aug 2017 - Jul 2019"
          logo={cgi}
          fontSize="14"
        />

        <ExperienceTile
          jobTitle="Analyst Programmer"
          company="CGI"
          description="Working in the Defence Sector at CGI, as part of an industrial placement year for university."
          time="Aug 2015 - Jul 2016"
          logo={cgi}
          fontSize="16"
        />

        <ExperienceTile
          jobTitle="Student Ambassador"
          company="Nottingham Trent University"
          description="Personally invited onto the Student Ambassador scheme due to high achievements from first year.
            Supported first year students in programming sessions and one on one mentoring sessions, as well as helping out and leading groups of potential students at university open days."
          time="Sep 2014 - Jun 2015"
          logo={ntu}
          fontSize="14"
        />
      </div>
    </div>
  </>
);

export default Experience;
