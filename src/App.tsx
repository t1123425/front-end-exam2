import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import FollowList from './components/FollowList';

function App() {
  return (
    <Box sx={{
      width:1,
      height:1,
      flexGrow: 1,
      backgroundColor:'primary.dark',
      color:'primary.contrastText'
    }}>
      <Grid container spacing={3}>
        <Grid xs={2} item>
          <NavBar />
        </Grid>
        <Grid xs={5} item>
          <Outlet />
        </Grid>
      </Grid>
      <FollowList />
    </Box>
  );
}

export default App;
