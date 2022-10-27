import React, {useState, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Box, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useGetSearchDataQuery} from '../features/api/apiSlice';
import {BoxSkeleton} from '../components/Skeleton';
import InfoBox from '../components/InfoBox';
import BPMatches from '../helpers/BreakPointMatch';
import ImgCard from '../components/ImgCard';
import FallBackImage from '../assets/imgs/image1.png';
import ErrorBlock from '../components/ErrorBlock';
import {UserData} from '../dataType';
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
  const updateStatus = useRef(true);
  const [currentPage, setCurrentPage] = useState(1);
  const renderResult = useRef<UserData[]>([]);
  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetSearchDataQuery({
    page: currentPage,
    pageSize: Number(pageSize),
    keyword,
  });

  function RenderResults(
    successStatus: boolean,
    isUpdate: boolean,
    updateData: UserData[]
  ) {
    if (successStatus && isUpdate) {
      renderResult.current = [...renderResult.current, ...updateData];
      updateStatus.current = false;
    }
  }
  RenderResults(
    isSuccess,
    updateStatus.current,
    pages?.data ? pages?.data : []
  );
  // SHOW ERROR BLOCK
  if (isError) return <ErrorBlock message="Error something wrong~" />;

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
      {/* render search result */}
      {isLoading && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(219px,1fr))',
            gridGap: '21px 34px',
            marginTop: '24px',
            justifyContent: 'space-between',
          }}
        >
          <BoxSkeleton
            width="100%"
            height="146px"
            skeletonCount={Number(pageSize)}
          />
        </Box>
      )}
      {/* render sucess */}
      {isSuccess && (
        <>
          {renderResult.current.length > 0 ? (
            <>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(219px,1fr))',
                  gridGap: '21px 34px',
                  marginTop: '24px',
                  justifyContent: 'space-between',
                }}
              >
                {renderResult.current.map((e, i) => {
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
                })}
              </Box>
              {/* 'More' Bottom will show up when there need to load next page data */}
              {currentPage !== pages.totalPages &&
              renderResult.current.length > 0 ? (
                <Button
                  className="customBtn"
                  onClick={() => {
                    setCurrentPage(currentPage => currentPage + 1);
                    updateStatus.current = true;
                  }}
                  disabled={isFetching}
                  variant="contained"
                  sx={{maxWidth: '343px', width: 1, marginTop: '39px'}}
                >
                  More
                </Button>
              ) : null}
            </>
          ) : (
            <Typography
              variant="h4"
              gutterBottom
              sx={{margin: '20px auto', textAlign: 'center', fontWeight: 600}}
            >
              {`Can't find data of ${keyword},`} <br />
              Please Search Again.
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default Search;
