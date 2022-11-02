import React from 'react';

function Header() {
  return (
    <a href="/" className="header__logo">
      <h1>Minipic</h1>
      <p data-testid="subtitle">Image compression tool</p>
    </a>
  );
}

export default Header;
