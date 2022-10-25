import React from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import {queryResData} from '../dataType';
import {useGetTagsQuery} from '../features/api/apiSlice';
import TagsBox from '../components/TagsBox';
import {BoxSkeleton} from '../components/Skeleton';
import {tagsData} from '../dataType/index';
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
    error,
  } = useGetTagsQuery(undefined);

  function renderTags(query: queryResData) {
    let renderContent = null;
    if (query.isLoading) {
      renderContent = (
        <BoxSkeleton width={150} height={150} skeletonCount={5} />
      );
    } else if (query.isError) {
      renderContent = <p>Error</p>;
    } else if (query.isSuccess) {
      renderContent =
        query.arrData &&
        query.arrData.map((e, i) => {
          return (
            <TagsBox key={i} title={e.name} secondary={e.count + ' Count'} />
          );
        });
    }
    return renderContent;
  }
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 150px)',
          gridGap: '24px',
          marginTop: '24px',
          justifyContent: 'space-between',
        }}
      >
        {renderTags({
          arrData: tags as tagsData[],
          isLoading,
          isSuccess,
          isError,
        })}
      </Box>
    </Box>
  );
};

export default Tags;
