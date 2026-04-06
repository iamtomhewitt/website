import LazySvg from '../LazySvgLoader';
import MiniProfile from './MiniProfile';

import './index.scss';

const About = () => {
  const skills = [{
    colour: '#3074BF',
    icon: 'typescript',
    label: 'TypeScript',
  }, {
    colour: '#F0DB4F',
    icon: 'js',
    label: 'JavaScript',
  }, {
    colour: '#FF9900',
    icon: 'aws',
    label: 'AWS',
  }, {
    colour: '#ED8B00',
    icon: 'java',
    label: 'Java',
  }, {
    colour: '#BD1424',
    icon: 'pied-piper-hat',
    label: 'Jest',
  }, {
    colour: '#68A063',
    icon: 'node',
    label: 'NodeJS',
  }, {
    colour: '#306998',
    icon: 'python',
    label: 'Python',
  }, {
    colour: '#61DBFB',
    icon: 'react',
    label: 'React',
  }, {
    colour: '#FF4785',
    folder: 'solid',
    icon: 'book',
    label: 'Storybook',
  }, {
    colour: '#fff',
    icon: 'github',
    label: 'Github',
  }, {
    colour: '#FC6D26',
    icon: 'gitlab',
    label: 'Gitlab',
  }, {
    colour: '#F1502F',
    icon: 'git-alt',
    label: 'Git',
  }, {
    colour: '#00758F',
    folder: 'solid',
    icon: 'database',
    label: 'MySQL',
  }, {
    colour: '#0db7ed',
    icon: 'docker',
    label: 'Docker',
  }];

  return (
    <div className='about'>
      <div className='about-profile'>

        <MiniProfile />

        <div className='about-info'>
          <h4>👋🏻 Hey! I'm Tom</h4>

          <div>I currently work at William Hill as a Principal Developer, on a variety of frontend and backend projects. I also work with Gitlab Pipelines and build Slackbots to help with day to day work. I play drums and love racing in VR.</div>

          <h4>Skills</h4>

          <div className='about-skills'>
            {skills
              .sort((a, b) => a.label.localeCompare(b.label))
              .map(skill => (
                <div className='about-skill' key={skill.icon}>
                  <LazySvg
                    color={skill.colour}
                    folder={(skill.folder as any) || 'brands'}
                    height='27px'
                    name={skill.icon}
                  />

                  <div>{skill.label}</div>
                </div>
              ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;