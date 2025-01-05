import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>BalaghatPlus</h1>
      <nav>
        <Link to="/"></Link>
      </nav>
    </header>
  );
};

export default Header;