import React from 'react';

import './Navigation.scss';

const onClick = () => console.log('Clicked')

const Navigation = () => (
  <div className='navigation'>
    <span className='name'>Tom Hewitt</span>
    <span className='link' onClick={onClick}>Experience</span>
    <span className='link' onClick={onClick}>Projects</span>
    <span className='link' onClick={onClick}>About</span>
  </div>
);

export default Navigation;