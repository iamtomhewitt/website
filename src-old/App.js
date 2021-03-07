import React from 'react';
import Routes from './Routes';
import Navigation from './components/navigation/Navigation';
import './App.scss';

const App = () => {
  const isMobile = window.innerWidth < 480;
  const getClass = (clazz) => (isMobile ? `${clazz}-mobile` : clazz);

  return (
    <div className="app">
      <Navigation isMobile={isMobile} getClass={getClass} />
      <Routes isMobile={isMobile} getClass={getClass} />
    </div>
  );
};

export default App;
