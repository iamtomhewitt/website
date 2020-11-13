import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Github from './components/github/Github';
import Home from './components/home/Home';
import JetDashVR from './components/privacy policies/JetDashVR';
import PageNotFound from './components/page-not-found/PageNotFound';
import VRPacmac from './components/privacy policies/VRPacmac';
import VRTurretDefence from './components/privacy policies/VRTurretDefence';

const Routes = (props) => {
  const { isMobile, getClass } = props;

  return (
    <Switch>
      <Route path="/" exact render={() => <Home isMobile={isMobile} getClass={getClass} />} />
      <Route path="/experience" exact render={() => <Experience isMobile={isMobile} getClass={getClass} />} />
      <Route path="/github" exact render={() => <Github isMobile={isMobile} getClass={getClass} />} />
      <Route path="/contact" exact render={() => <Contact isMobile={isMobile} getClass={getClass} />} />
      <Route path="/vr-pac-mac-privacy-policy" exact component={VRPacmac} />
      <Route path="/vr-turret-defence-privacy-policy" exact component={VRTurretDefence} />
      <Route path="/jet-dash-vr-privacy-policy" exact component={JetDashVR} />

      { /* Catch all unmatched routes */}
      <Route component={PageNotFound} />
    </Switch>
  );
};

Routes.propTypes = {
  getClass: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Routes;
