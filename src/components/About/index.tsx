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

        <div className='about-spotify'>
          <h4>🎧 Music</h4>

          <div className='about-spotify-data'>
            <div className='about-spotify-current'>
              <div>I'm currently listening to: </div>

              <img src='https://spotify-github-profile.kittinanx.com/api/view?uid=6uewucrtqgm5qi9s7vafweivn&cover_image=true&theme=spotify-embed' />
            </div>

            <div className='about-spotify-top-artists'>
              <div>My Top Artists</div>

              <ul>
                <li>Sleep Token</li>

                <li>Northlan</li>

                <li>Enter Shikari</li>

                <li>Halo Soundtrack</li>

                <li>Metallica</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default About;