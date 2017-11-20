import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default () => {
  return (
    <div>
      <nav id="nav">
        <input className="trigger" type="checkbox" id="mainNavButton" />
        <label htmlFor="mainNavButton">Menu</label>
        <ul>
          <li>
            <NavLink className="menu-items" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="menu-items" activeClassName="active" to="/aboutus">
              About Us
            </NavLink>
            <ul>
              <li>
                <NavLink className="menu-items" activeClassName="active" to="/aboutus/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-items" activeClassName="active" to="/aboutus/team">
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-items" activeClassName="active" to="/aboutus/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="menu-items" to="/logout">
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
