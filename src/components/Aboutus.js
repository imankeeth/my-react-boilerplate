import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/cards.css';
import '../styles/container.css';

export default () => {
  return (
    <div className="container">
      <div className="home-card">
        <div className="content">
          <h1>Profile</h1>
          <Link to="/aboutus/profile" className="about-link">
            Link ->
          </Link>
        </div>
      </div>
      <div className="home-card">
        <div className="content">
          <h1>Team</h1>
          <Link to="/aboutus/team" className="about-link">
            Link ->
          </Link>
        </div>
      </div>
      <div className="home-card">
        <div className="content">
          <h1>Contact</h1>
          <Link to="/aboutus/contact" className="about-link">
            Link ->
          </Link>
        </div>
      </div>
    </div>
  );
};
