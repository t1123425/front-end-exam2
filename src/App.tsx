import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import FollowList from './components/FollowList';
import BPMatches from './helpers/BreakPointMatch'
function App() {
  return (
    <Box sx={{
      width:1,
      height:1,
      backgroundColor:'primary.dark',
      color:'primary.contrastText'
    }}>
     <NavBar />
     <Box component="main">
        <Outlet />
     </Box>
      {/* <Grid sx={{height:1}} justifyContent="center" container>
        <Grid sx={{maxWidth:BPMatches('lg')?850:725}} item>
          <Outlet />
        </Grid>
      </Grid> */}
      <FollowList/>
    </Box>
  );
}

export default App;
