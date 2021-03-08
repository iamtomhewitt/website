import React, { useRef } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Github from './components/Github';
import Intro from './components/Intro';
import Navigation from './components/Navigation';

const App = () => {
  const experienceRef = useRef(null);
  const githubRef = useRef(null);
  const introRef = useRef(null);

  return (
    <div>
      <Navigation githubRef={githubRef} introRef={introRef} experienceRef={experienceRef} />
      <Intro />
      <About reference={introRef} />
      <Experience reference={experienceRef} />
      <Github reference={githubRef} />
    </div>
  );
};

export default App;
