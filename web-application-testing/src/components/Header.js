import React from "react";
import '../App.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 data-testid="title"><span role="img" aria-label="baseball">⚾️</span> Go Baseball!! </h1>
    </div>
  );
};

export default Header;
