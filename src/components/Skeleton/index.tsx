import React from 'react';
import {Box, List, ListItem} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
interface skeletonProps {
  width?: string | number;
  height?: string | number;
  skeletonCount: number;
}
export const ListSkeleton: React.FC<skeletonProps> = props => {
  return (
    <List sx={{width: 1}}>
      {Array.from(new Array(props.skeletonCount)).map((e, i) => {
        return (
          <ListItem key={i}>
            <Skeleton
              variant="rounded"
              width={40}
              height={40}
              sx={{bgcolor: 'rgba(255,255,255,0.2)'}}
            ></Skeleton>
            <Skeleton
              variant="text"
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                width: '80%',
                height: 40,
                marginLeft: '10px',
              }}
            ></Skeleton>
          </ListItem>
        );
      })}
    </List>
  );
};

export const BoxSkeleton: React.FC<skeletonProps> = props => {
  return (
    <>
      {Array.from(new Array(props.skeletonCount)).map((e, i) => {
        return (
          <Box key={i} sx={{width: props.width ? props.width : '150px'}}>
            <Skeleton
              variant="rounded"
              height={props.height ? props.height : '150px'}
              sx={{bgcolor: 'rgba(255,255,255,0.2)'}}
            />
            <Skeleton sx={{bgcolor: 'rgba(255,255,255,0.11)'}} />
            <Skeleton sx={{bgcolor: 'rgba(255,255,255,0.11)', width: 0.5}} />
          </Box>
        );
      })}
    </>
  );
};
