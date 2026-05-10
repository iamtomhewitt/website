import { useEffect, useState } from 'react';
import * as dateFns from 'date-fns';

import LazySvg from '../LazySvgLoader';
import { GithubRepo } from '../../types/github';

import './index.scss';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/iamtomhewitt/repos?sort=updated')
      .then(data => data.json())
      .then((json: GithubRepo[]) => {
        const sorted = json
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .filter(project => project.name !== 'iamtomhewitt');
        setProjects(sorted);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='projects' id='projects'>
      <h2>Things I've Built</h2>

      {isLoading && (
        <LazySvg
          className='projects-loading'
          folder='solid'
          name='circle-notch'
          width={30}
        />
      )}

      <div className='projects-grid'>
        {projects.map(project => {
          const lastUpdatedData = dateFns.intervalToDuration({
            start: new Date(project.updated_at),
            end: new Date(),
          });
          const lastUpdatedLabel = Object.entries(lastUpdatedData)
            .map(([duration, amount]) => `${amount} ${duration}`)
            .join(', ');

          return (
            <div
              className='projects-project'
              key={project.name}
              onClick={() => window.open(project.html_url, '_blank')}
            >
              <div className='projects-project-heading'>
                <div className='projects-project-title'>{project.name}</div>

                {project.stargazers_count > 0 && (
                  <div className='projects-project-counter'>
                    <span>{project.stargazers_count}</span>

                    <LazySvg
                      className='projects-project-count'
                      folder='solid'
                      name='star'
                    />
                  </div>
                )}

                {project.forks_count > 0 && (
                  <div className='projects-project-counter'>
                    <span>{project.forks_count}</span>

                    <LazySvg
                      className='projects-project-count'
                      folder='solid'
                      name='code-fork'
                    />
                  </div>
                )}
              </div>

              <div className='projects-project-subtitle'>{project.language}</div>

              <div className='projects-project-description'>{project.description}</div>

              <div className='projects-project-updated-at'>Updated {lastUpdatedLabel} ago</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;