import React from 'react';

import './Intro.scss';

const Intro = () => (
  <div className="intro">
    <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="" />
    <h2>Tom Hewitt</h2>
    <hr />
    <h4>Software Developer</h4>
    <div>TODO SOCIAL ICONS</div>
  </div>
);

export default Intro;
