import React from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import {useGetTagsQuery} from '../features/api/apiSlice';
import TagsBox from '../components/TagsBox';
import {BoxSkeleton} from '../components/Skeleton';
import ErrorBlock from '../components/ErrorBlock';
import BPMatches from '../helpers/BreakPointMatch';
/**
 * Tags page:
 * when enter this page will call api query useGetTagsQuery
 * then render the tagsBox
 */

const Tags: React.FC = () => {
  const mdMatch = BPMatches('md');
  const {
    data: tags,
    isLoading,
    isSuccess,
    isError,
  } = useGetTagsQuery(undefined);

  // SHOW ERROR BLOCK
  if (isError) return <ErrorBlock message="Error something wrong~" />;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: mdMatch ? '90px 24px' : '80px 0',
      }}
    >
      <Typography
        variant="h1"
        className="pageTitle"
        color="primary.contrastText"
      >
        Tags
      </Typography>
      {isLoading && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 150px)',
            gridGap: '24px',
            marginTop: '24px',
            justifyContent: 'space-between',
          }}
        >
          <BoxSkeleton width={150} height={150} skeletonCount={5} />
        </Box>
      )}
      {/* render sucess */}
      {isSuccess && (
        <>
          {tags.length > 0 ? (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 150px)',
                gridGap: '24px',
                marginTop: '24px',
                justifyContent: 'space-between',
              }}
            >
              {tags.map((e, i) => {
                return (
                  <TagsBox
                    key={i}
                    title={e.name}
                    secondary={e.count + ' Count'}
                  />
                );
              })}
            </Box>
          ) : (
            <Typography
              variant="h4"
              gutterBottom
              sx={{margin: '20px auto', textAlign: 'center', fontWeight: 600}}
            >
              There is no tags data.
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default Tags;
