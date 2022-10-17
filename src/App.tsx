import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import FollowList from './components/FollowList';
import BPMatches from './helpers/BreakPointMatch'
function App() {
  const lgMatch = BPMatches('lg');
  const mdMatch = BPMatches('md');
  // 505px is space  with followList & router page content
  const lgMainStyle = {
    maxWidth:'calc(100% - 505px)',
    margin:0,
    padding:'0 0 0 130px'
  }
  const smMainStyle = {
    maxWidth:850,
    margin:'0 auto',
    padding:'0 20px'
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
        <Box component="section" sx={{height:1,...(lgMatch?smMainStyle:lgMainStyle)}} >
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
