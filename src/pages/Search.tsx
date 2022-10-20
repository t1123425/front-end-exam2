import React from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Search: React.FC = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',paddingTop:'80px'}}>
      <Typography variant="h1"  className='pageTitle' color="primary.contrastText">
         <Link to="/" className='pageBack'>
          <ArrowBackIosIcon />
         </Link>
         Results
      </Typography>
    </Box>
  );
};

export default Search;
