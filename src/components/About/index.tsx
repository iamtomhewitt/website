import MiniProfile from './MiniProfile';

import './index.scss';

const About = () => (
  <div className='about' id='about'>
    <MiniProfile />

    <div>
      <div className='about-intro'>
        <h4>👋🏻 Hey! I'm Tom</h4>

        <div>
          I'm currently a Principal Developer at William Hill, working on software that powers Self Service Betting Terminals and staff devices in shops throughout the UK.
        </div>

        <br />

        <div>
          I'm big into Gitlab CI / automation and Slack based messaging for day to day developer tasks.
        </div>

        <br />

        <div>I play drums and I'm a big Formula 1 fan!</div>

        <br />
      </div>
    </div>

  </div>
);

export default About;