import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Balaghat Plus</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/restaurants">Restaurants</Link></li>
          <li><Link to="/category/shops">Shops</Link></li>
          <li><Link to="/category/services">Services</Link></li>
          <li><Link to="/category/health">Health & Wellness</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;