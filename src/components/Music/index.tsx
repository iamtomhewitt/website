import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import LazySvg from '../LazySvgLoader';

import './index.scss';

const Music = () => {
  const [spotifyData, setSpotifyData] = useState({
    artists: [],
    tracks: [],
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 430px)',
  });
  const theme = isMobile ? 'natemoo-re' : 'spotify-embed';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://9smygdfh2g.execute-api.eu-west-1.amazonaws.com/api/top-items')
        .then(r => r.json());
      setSpotifyData({
        artists: response.data.artists.slice(0, 10),
        tracks: response.data.tracks.slice(0, 10),
      });
    };

    fetchData();
  }, []);

  return (
    <div className='music'>
      <h2>Music</h2>

      <div className='music-data'>
        <div className='music-current'>
          <div>I'm currently listening to: </div>

          <img src={`https://spotify-github-profile.kittinanx.com/api/view?uid=6uewucrtqgm5qi9s7vafweivn&cover_image=true&theme=${theme}`} />
        </div>

        <div className='music-top-items'>
          {spotifyData.artists.length > 0 && (
            <div>
              <h4>My Top Artists</h4>

              {spotifyData.artists.map((item: any) => (
                <div
                  className='music-top-items-item'
                  key={item.name}
                  onClick={() => window.open(item.external_urls.spotify)}
                >
                  <img src={item.images[0].url} />

                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          )}

          {spotifyData.tracks.length > 0 && (
            <div>
              <h4>My Top Tracks</h4>

              {spotifyData.tracks.map((item: any) => (
                <div
                  className='music-top-items-item'
                  key={item.name}
                  onClick={() => window.open(item.external_urls.spotify)}
                >
                  <img src={item.album.images[0].url} />

                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='music-powered-by'>
        <span>Powered by my&nbsp;</span>

        <a
          href='https://github.com/iamtomhewitt/spotify'
          rel='noreferrer'
          target='_blank'
        >
          <LazySvg folder='brands' name='github' />

          <span>&nbsp;</span>

          <span>Spotify API</span>
        </a>
      </div>
    </div>
  );
};

export default Music;