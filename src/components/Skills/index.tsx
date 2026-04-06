import LazySvg from '../LazySvgLoader';

import './index.scss';

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
  icon: 'node-js',
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

const Skills = () => (
  <div className='skills'>
    <h2>Skills</h2>

    <div className='skills-grid'>
      {skills
        .sort((a, b) => a.label.localeCompare(b.label))
        .map(skill => (
          <div className='skills-skill' key={skill.icon}>
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
);

export default Skills;