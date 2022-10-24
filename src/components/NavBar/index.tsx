import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import LinksList from './LinksList';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useLocation, Link} from 'react-router-dom';
interface navProp {
  mdMatch?: boolean;
  maxWidth?: number | string;
}
const NavBar: React.FC<navProp> = props => {
  const location = useLocation();
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
        width: 1,
        position: props.mdMatch ? 'fixed' : 'status',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '70px',
        padding: '0 25px',
      }}
    >
      {props.mdMatch && location.pathname !== '/' ? (
        <Typography
          variant="h1"
          className="pageTitle"
          color="primary.contrastText"
        >
          <Link to="/" style={{color: '#fff', marginRight: '13px'}}>
            <ArrowBackIosIcon />
          </Link>
          Home Page
        </Typography>
      ) : (
        <h1 className="logoStyle">LOGO</h1>
      )}
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
