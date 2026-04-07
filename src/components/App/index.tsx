import React from 'react';

import About from '../About';
import Masthead from '../Masthead';
import Music from '../Music';
import Projects from '../Projects';
import Skills from '../Skills';
import Work from '../Work';
import pkg from '../../../package.json';

import './index.scss';

const App = () => (
  <div className='app'>
    <Masthead />

    <div className='app-sections'>
      <About />

      <Music />

      <Skills />

      <Work />

      <Projects />
    </div>

    <div className='app-version'>{pkg.version}</div>
  </div>
);

export default App;
