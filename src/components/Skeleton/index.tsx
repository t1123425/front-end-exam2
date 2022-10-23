import React from 'react';
import {Box, List, ListItem} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
interface skeletonProps {
  width?: string | number;
  height: string | number;
  skeletonCount: number;
}
export const ListSkeleton: React.FC<skeletonProps> = props => {
  return (
    <List>
      {Array.from(new Array(props.skeletonCount)).map(e => (
        <ListItem key={e}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width={40}
            height={40}
          ></Skeleton>
          <Skeleton variant="text" animation="wave"></Skeleton>
        </ListItem>
      ))}
    </List>
  );
};

export const BoxSkeleton: React.FC<skeletonProps> = props => {
  return (
    <Box>
      <Skeleton
        variant="rounded"
        width={props.width ? props.width : '150px'}
        height={props.height ? props.height : '150px'}
        animation="wave"
      ></Skeleton>
      <Skeleton variant="text" animation="wave"></Skeleton>
      <Skeleton variant="text" animation="wave"></Skeleton>
    </Box>
  );
};
