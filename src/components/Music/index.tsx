import { useMediaQuery } from 'react-responsive';

import './index.scss';

const Music = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 430px)',
  });
  const theme = isMobile ? 'natemoo-re' : 'spotify-embed';

  return (
    <div className='music'>
      <h2>Music</h2>

      <div className='music-data'>
        <div className='music-current'>
          <div>I'm currently listening to: </div>

          <img src={`https://spotify-github-profile.kittinanx.com/api/view?uid=6uewucrtqgm5qi9s7vafweivn&cover_image=true&theme=${theme}`} />
        </div>

        <div className='music-top-artists'>
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
  );
};

export default Music;