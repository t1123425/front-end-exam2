import React, {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Box, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useGetAllDataQuery} from '../features/api/apiSlice';
import {userData} from '../dataType';
import {BoxSkeleton} from '../components/Skeleton';
import InfoBox from '../components/InfoBox';
import BPMatches from '../helpers/BreakPointMatch';
import ImgCard from '../components/ImgCard';
import FallBackImage from '../assets/imgs/image1.png';
/**
 * Result page:
 * when enter this page will get URL parameter (keyword & pageSize)
 * then call api query useGetAllDataQuery
 */
const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pageSize = searchParams.get('pageSize');
  const keyword = searchParams.get('keyword');
  const mdMatch = BPMatches('md');
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
              <ImgCard
                style={{width: '100%', marginBottom: '12px'}}
                src={e.avatar}
                alt={e.name}
                fallback={FallBackImage}
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: mdMatch ? '90px 24px' : '92px 0',
      }}
    >
      <Typography
        variant="h1"
        className="pageTitle"
        color="primary.contrastText"
      >
        <Link
          to="/"
          className="pageBack"
          style={{display: mdMatch ? 'none' : 'inline-block'}}
        >
          <ArrowBackIosIcon sx={{fontSize: '1.6rem'}} />
        </Link>
        Results
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(219px,1fr))',
          columnGap: '34px',
          rowGap: '21px',
          marginTop: '24px',
          justifyContent: 'space-between',
        }}
      >
        {/* render search result */}
        {renderContent}
      </Box>
      {/* 'More' Bottom will show up when there need to load next page data */}
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
