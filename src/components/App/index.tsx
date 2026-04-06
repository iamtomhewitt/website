import React from 'react';

import About from '../About';
import Masthead from '../Masthead';
import Skills from '../Skills';

import './index.scss';

const App = () => (
  <div className='app'>
    <Masthead />

    <div className='app-sections'>
      <About />

      <Skills />
    </div>
  </div>
);

export default App;
