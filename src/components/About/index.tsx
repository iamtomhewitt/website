import profilePicture from '../../images/me.png';

import './index.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='about-profile'>
        <div className='about-profile-mini'>
          <div>Tom Hewitt</div>

          <img src={profilePicture} />

          <i className='fa-brands fa-github'>
            <span>Github</span>
          </i>

          <i className='fa-brands fa-linkedin' />

          <i className='fa-brands fa-stack-overflow' />

          <i className='fa-brands fa-instagram' />
        </div>

        <div className='about-intro'>
          <h4>👋🏻 Hey! I'm Tom</h4>

          <div>I currently work at William Hill as a Principal Developer, on a variety of frontend and backend projects. I also work with Gitlab Pipelines and build Slackbots to help with day to day work. I play drums and love racing in VR.</div>
        </div>
      </div>

      <div className='about-skills' />

    </div>
  );
};

export default About;