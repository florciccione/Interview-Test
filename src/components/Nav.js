
import React from 'react';
//COMPONENTS
import SearchBar from './SearchBar.js';
//CSS
import './Nav.css';

function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className='navbar_search'>
          <SearchBar />
        </div>
      </nav>
       
    </div>
  );
};

export default Nav;
