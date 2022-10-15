import React from 'react';
import {NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';


const NavBar: React.FC = () => {
  return (
    <Box
    component="nav"
    sx={{
      width:1,
      height:1,
      maxWidth:80,
      textAlign:'center',
      backgroundColor:'primary.main',
      // position:'fixed',
      // top:0,
      // left:0
    }}>
      <h1 className="m-0 logoStyle">LOGO</h1>
      <ul className="defaultList">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tags">Tags</NavLink>
        </li>
      </ul>
    </Box>
  );
};
export default NavBar;
