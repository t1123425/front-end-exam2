import React, {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log('search_pageSize', searchParams.get('pageSize'));
    console.log('search_keyword', searchParams.get('keyword'));
    //console.log('searchParams', searchParams.get('pageSize'));
  }, []);
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '80px'}}>
      <Typography
        variant="h1"
        className="pageTitle"
        color="primary.contrastText"
      >
        <Link to="/" className="pageBack">
          <ArrowBackIosIcon />
        </Link>
        Results
      </Typography>
    </Box>
  );
};

export default Search;
