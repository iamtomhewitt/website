import React from 'react';
import ExperienceTile from './ExperienceTile';

import './Experience.scss';

const Experience = () => {
  // TODO pass down through props as its all the same?
  const isMobile = window.innerWidth < 480;
  const getClass = (clazz) => (isMobile ? `${clazz}-mobile` : clazz);

  return (
    <div className={getClass('experience')}>
      <div className={getClass('content')}>
        <h1>
          I've
          <span className="highlight">&nbsp;worked&nbsp;</span>
          at...
        </h1>
        <div className={getClass('timeline')}>
          <ul>
            <ExperienceTile
              isMobile={isMobile}
              getClass={getClass}
              jobTitle="Developer"
              company="William Hill"
              description={`Developer on betting shop self service terminals software. Working with mainly Java, Javascript and React. Developing my front end skills whilst writing new features and fixing issues across the entire terminal system.

            During Covid-19, worked on William Hills Bingo website. Introduced new customer feature 'Recently Played', allowing users to see their recently played games at the top of the page. Also contributed to the CMS to allow for website customisation wthout the need to rebuild and redeploy.`}
              time="Jul 2019"
            />

            <ExperienceTile
              isMobile={isMobile}
              getClass={getClass}
              jobTitle="Graduate Developer"
              company="CGI"
              description={`Developer on a Defence sector project. Took on the responsibility of customer relationship subsystem team lead, working on everything from code, to builds, deployments, releases and live support, both backend and frontend.
            
            Helped develop a reporting tool to produce adhoc pdf reports for the client, which interface with the subsystem.

            Used a variety of tools and software such as Java, SQL, JSP, Perl, Hibernate, Visual Basic, Remedy BMC, Crystal Reports.`}
              time="Aug 2017"
            />

            <ExperienceTile
              isMobile={isMobile}
              getClass={getClass}
              jobTitle="Analyst Programmer"
              company="CGI"
              description="Worked on a Defence sector project, as part of an industrial placement year for university."
              time="Aug 2015"
            />

            <ExperienceTile
              isMobile={isMobile}
              getClass={getClass}
              jobTitle="Student Ambassador"
              company="Nottingham Trent University"
              description={`Personally invited onto the Student Ambassador scheme due to high achievements from first year.

            Supported first year students in programming sessions and one on one mentoring sessions, as well as helping out and leading groups of potential students at university open days.`}
              time="Sep 2014"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
