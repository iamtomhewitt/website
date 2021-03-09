import React from 'react';
import PropTypes from 'prop-types';
import { version } from '../../../package.json';
import './Navigation.scss';

const onClick = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

const Navigation = ({ githubRef, introRef, experienceRef }) => (
  <div className="navigation">
    <span className="name">Tom Hewitt</span>
    <span className="version">v{version}</span>
    <span className="link" onClick={() => onClick(githubRef)}>Projects</span>
    <span className="link" onClick={() => onClick(experienceRef)}>Experience</span>
    <span className="link" onClick={() => onClick(introRef)}>About</span>
  </div>
);

Navigation.propTypes = {
  experienceRef: PropTypes.object,
  githubRef: PropTypes.object,
  introRef: PropTypes.object,
};

export default Navigation;
