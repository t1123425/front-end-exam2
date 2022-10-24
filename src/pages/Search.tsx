import React, {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useGetAllDataQuery} from '../features/api/apiSlice';
import {pagesData, userData} from '../dataType';
import {BoxSkeleton} from '../components/Skeleton';
import InfoBox from '../components/InfoBox';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pageSize = searchParams.get('pageSize');
  const keyword = searchParams.get('keyword');
  let totalPage;
  let result: userData[] = [];
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetAllDataQuery({page: currentPage, pageSize, keyword});

  let renderContent = null;
  if (isLoading) {
    renderContent = (
      <BoxSkeleton width="100%" height="146px" skeletonCount={5} />
    );
  } else if (isError) {
    renderContent = <p>Error</p>;
  } else if (isSuccess) {
    console.log('page data', pages);
    totalPage = pages.totalPages;
    result = [...result, ...pages.data];
    if (result.length > 0) {
      renderContent = result.map((e, i) => {
        return (
          <Box key={i}>
            <InfoBox title={e.name} secondary={'By ' + e.username}>
              <img
                style={{width: '100%', marginBottom: '12px'}}
                src={e.avatar}
                alt={e.name}
              />
            </InfoBox>
          </Box>
        );
      });
    } else {
      renderContent = (
        <p>Sorry! Threre No Such Data like:{keyword} ,please Search Again.</p>
      );
    }
  }
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 219px)',
          gridGap: '34px',
          justifyContent: 'space-between',
        }}
      >
        {renderContent}
      </Box>
      {currentPage !== totalPage && result.length > 0 ? (
        <Button
          className="customBtn"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          disabled={isFetching}
          variant="contained"
          sx={{maxWidth: '343px', width: 1, marginTop: '39px'}}
        >
          More
        </Button>
      ) : null}
    </Box>
  );
};

export default Search;
