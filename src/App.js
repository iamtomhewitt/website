import React from 'react';
import Routes from './Routes';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import './App.css';

const App = () => (
  <div>
    <Navigation />
    <Routes />
    <Footer />
  </div>
);

export default App;
