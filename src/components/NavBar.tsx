import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar: React.FC = () => {
  return (
    <nav>
      <h1 className="m-0">LOGO</h1>
      <ul className="linkName list-style-none">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tags">Tags</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
