// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // Assuming isLoggedIn is true for now to show "My Problems"
  // This would come from your auth state in a real app
  const isLoggedIn = true;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Handy<span>Hub</span>
      </Link>
      {/* The list of links will now be styled to align right */}
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post-problem"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Post Problem
          </NavLink>
        </li>
        {isLoggedIn && ( // Conditionally render "My Problems"
           <li>
            <NavLink
              to="/my-problems"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              My Problems
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/all-problems" // Assuming this is your "Browse Tasks" page
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Browse Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      {/* The "navbar-get-started" div and its button have been removed */}
    </nav>
  );
};

export default Navbar;