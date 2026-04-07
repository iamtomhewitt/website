import { useEffect, useState } from 'react';

import LazySvg from '../LazySvgLoader';

import './index.scss';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/iamtomhewitt/repos?sort=updated')
      .then(data => data.json())
      .then(json => setProjects(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='projects' id='projects'>
      <h2>Latest projects</h2>

      {isLoading && (
        <LazySvg
          className='projects-loading'
          folder='solid'
          name='circle-notch'
          width={30}
        />
      )}

      <div className='projects-grid'>
        {projects.map(project => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;