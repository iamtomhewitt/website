import LazySvg from '../LazySvgLoader';
import profilePicture from '../../images/me.png';

import './index.scss';

const About = () => {
  const quickLinks = [{
    icon: 'github',
    label: 'Github',
    colour: '',
  }, {
    icon: 'linkedin',
    label: 'LinkedIn',
    colour: '#0966C2',
  }, {
    icon: 'stack-overflow',
    label: 'Stack Overflow',
    colour: '#EC7C24',
  }, {
    icon: 'instagram',
    label: 'Instagram',
    colour: '#D62976',
  }];

  const skills = [{
    icon: '',
    label: 'TypeScript',
    colour: '#3074BF',
  }];

  return (
    <div className='about'>
      <div className='about-profile'>
        <div className='about-profile-mini'>
          <h4>Tom Hewitt</h4>

          <img src={profilePicture} />

          {quickLinks.map(link => (
            <div className='about-profile-mini-link' key={link.icon}>
              <LazySvg
                color={link.colour}
                folder='brands'
                name={link.icon}
                width='27px'
              />

              <span>{link.label}</span>
            </div>
          ))}
        </div>

        <div className='about-info'>
          <h4>👋🏻 Hey! I'm Tom</h4>

          <div>I currently work at William Hill as a Principal Developer, on a variety of frontend and backend projects. I also work with Gitlab Pipelines and build Slackbots to help with day to day work. I play drums and love racing in VR.</div>

          <h4>Skills</h4>

          {/* <div>
            {skills.map(skill => (
              <div key={skill.label}>
                {typeof skill.icon === 'string' ?
                  <i
                    className={`fa-xl fa-brands ${skill.icon}`}
                    style={{
                      color: skill.colour,
                    }}
                  /> :
                  skill.icon}

                <span>{skill.label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default About;