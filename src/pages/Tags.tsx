import React from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import {tagsData, queryResData} from '../dataType';
import {useGetTagsQuery} from '../features/api/apiSlice';
import TagsBox from '../components/TagsBox';
import Skeleton from '@mui/material/Skeleton';

function renderTags(query: queryResData) {
  let renderContent = null;
  if (query.isLoading) {
    renderContent = <Skeleton variant="rectangular" width={150} height={150} />;
  } else if (query.isError) {
    renderContent = <p>Error</p>;
  } else if (query.isSuccess) {
    renderContent =
      Array.isArray(query.data) &&
      query.data.map((e, i) => {
        return (
          <TagsBox key={i} title={e.name} secondary={e.count + ' Count'} />
        );
      });
  }
  return renderContent;
}
const Tags: React.FC = () => {
  const {
    data: tags,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTagsQuery(undefined);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '80px'}}>
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
          justifyContent: 'space-between',
        }}
      >
        {renderTags({data: tags, isLoading, isSuccess, isError})}
      </Box>
    </Box>
  );
};

export default Tags;
