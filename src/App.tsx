import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import FollowList from './components/FollowList';
import BPMatches from './helpers/BreakPointMatch'
function App() {
  const lgMatch = BPMatches('lg');
  const mdMatch = BPMatches('md');
  const lgMainStyle = {
    maxWidth:725,
    margin:0,
    paddingLeft:'130px'
  }
  const smMainStyle = {
    maxWidth:850,
    margin:'0 auto',
    paddingLeft:0
  }
  return (
    <Box sx={{
      display:'flex',
      flexWrap:'wrap',
      width:1,
      flexDirection:mdMatch?'column':'row',
      backgroundColor:'primary.dark',
      color:'primary.contrastText'
    }}>
     <NavBar mdMatch={mdMatch} />
     <Box component="main" sx={{flexGrow:1}}>
        <Box component="section" sx={lgMatch?smMainStyle:lgMainStyle} >
           <Outlet />
        </Box>
     </Box>
      {/* <Grid sx={{height:1}} justifyContent="center" container>
        <Grid sx={{maxWidth:BPMatches('lg')?850:725}} item>
          <Outlet />
        </Grid>
      </Grid> */}
      <FollowList  isShow={!lgMatch}/>
    </Box>
  );
}

export default App;
