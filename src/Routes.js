import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import PageNotFound from './components/page-not-found/PageNotFound';
import Experience from './components/experience/Experience';
import Github from './components/github/Github';
import Contact from './components/contact/Contact';
import VRPacmac from './components/privacy policies/VRPacmac';
import VRTurretDefence from './components/privacy policies/VRTurretDefence';
import JetDashVR from './components/privacy policies/JetDashVR';
import About from './components/about/About';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/experience" exact component={Experience} />
    <Route path="/github" exact component={Github} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/about" exact component={About} />
    <Route path="/vr-pac-mac-privacy-policy" exact component={VRPacmac} />
    <Route path="/vr-turret-defence-privacy-policy" exact component={VRTurretDefence} />
    <Route path="/jet-dash-vr-privacy-policy" exact component={JetDashVR} />

    { /* Catch all unmatched routes */}
    <Route component={PageNotFound} />
  </Switch>
);
