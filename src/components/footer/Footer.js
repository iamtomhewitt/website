import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <hr />
      <SocialIcon className="icon" fgColor="#FFF" url="http://github.com/iamtomhewitt" />
      <SocialIcon className="icon" fgColor="#FFF" url="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/" />
      <SocialIcon className="icon" fgColor="#FFF" url="http://instagram.com/iamtomhewitt" />
      <SocialIcon className="icon" fgColor="#FFF" url="https://www.youtube.com/channel/UCKP2LhsWT2UdXfUgY_yb8iw?" />
      <SocialIcon className="icon" fgColor="#FFF" url="https://stackoverflow.com/users/3002268/tom?tab=profile" />
    </div>
  );
};

export default Footer;
