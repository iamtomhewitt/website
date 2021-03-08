import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Github from './components/Github';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
// import './App.scss';

const App = () => (
  // https://www.chuckgroom.com/
  <div>
    <Navigation />
    <Intro />
    <About />
    <Experience />
    <Github />
  </div>
);
export default App;
