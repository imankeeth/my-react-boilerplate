import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/cards.css';
import '../styles/container.css';

export default ({ match }) => {
  console.log(match);
  return (
    <div className="container">
      <div className="home-card">
        <div className="content">
          <h1>{match.params.section.toUpperCase()}</h1>
          <Link to="/aboutus" className="about-link">
            About us
          </Link>
        </div>
      </div>
    </div>
  );
};
