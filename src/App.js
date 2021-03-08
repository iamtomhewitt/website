import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
// import './App.scss';

const App = () => {
  //https://www.chuckgroom.com/
  return (
    <div>
      <Navigation />
      <Intro />
      <About />
      <Experience />
        TODO - Github repos
    </div>
  );
};

export default App;
