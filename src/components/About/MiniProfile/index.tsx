import LazySvg from '../../LazySvgLoader';
import profilePicture from '../../../images/me.png';

import './index.scss';

const quickLinks = [{
  colour: '#fff',
  icon: 'github',
  label: 'Github',
  url: 'https://github.com/iamtomhewitt',
}, {
  colour: '#0966C2',
  icon: 'linkedin',
  label: 'LinkedIn',
  url: 'https://www.linkedin.com/in/thomas-hewitt-ab7724a8/',
}, {
  colour: '#EC7C24',
  icon: 'stack-overflow',
  label: 'Stack Overflow',
  url: 'https://stackoverflow.com/users/3002268/tom',
}, {
  colour: '#D62976',
  icon: 'instagram',
  label: 'Instagram',
  url: 'http://instagram.com/iamtomhewitt',
}];

const MiniProfile = () => {
  return (
    <div className='mini-profile'>
      <img src={profilePicture} />

      <div className='mini-profile-links'>
        {quickLinks.map(link => (
          <div
            className='mini-profile-link'
            key={link.icon}
            onClick={() => window.open(link.url, '_blank')}
          >

            <LazySvg
              color={link.colour}
              folder='brands'
              name={link.icon}
              width='24px'
            />

            <span>{link.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProfile;