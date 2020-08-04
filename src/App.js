import React from 'react';
import Routes from './Routes';
import Navigation from './components/navigation/Navigation';
import './App.scss';

const App = () => (
  <div className="app">
    <Navigation />
    <Routes />
  </div>
);

export default App;
