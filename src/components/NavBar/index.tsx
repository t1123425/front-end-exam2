import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import LinksList from './LinksList';
interface navProp {
  mdMatch?: boolean;
  maxWidth?: number | string;
}
const NavBar: React.FC<navProp> = props => {
  const linksData = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Tags',
      path: '/tags',
    },
  ];
  return (
    <Box
      component="nav"
      sx={{
        flexGrow: props.mdMatch ? 0 : 1,
        maxWidth: props.mdMatch ? '100%' : 80,
        backgroundColor: 'primary.main',
      }}
    >
      <h1
        style={{display: props.mdMatch ? 'block' : 'none'}}
        className="logoStyle"
      >
        LOGO
      </h1>
      <Drawer
        anchor={props.mdMatch ? 'bottom' : 'left'}
        variant="permanent"
        sx={{'& .MuiPaper-root': {backgroundColor: 'primary.main'}}}
        open
      >
        <h1
          style={{display: props.mdMatch ? 'none' : 'block'}}
          className="logoStyle"
        >
          LOGO
        </h1>
        <LinksList
          listDirect={props.mdMatch ? 'row' : 'column'}
          links={linksData}
        />
      </Drawer>
    </Box>
  );
};
export default NavBar;
