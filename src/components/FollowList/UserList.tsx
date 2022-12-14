import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {QueryResData, UserData} from '../../dataType/index';
import {ListSkeleton} from '../Skeleton';
interface useListProp extends QueryResData {
  hasNextData?: boolean;
  listData?: UserData[];
}

const UserList: React.FC<useListProp> = props => {
  if (props.isError)
    return (
      <List sx={{width: 1, padding: 0}}>
        <ListItem>
          <p>Error</p>
        </ListItem>
      </List>
    );
  if (props.isLoading) {
    return <ListSkeleton skeletonCount={6}></ListSkeleton>;
  } else {
    // if (props.isSuccess) {
    //   console.log('data', props.objData);
    // }
    return (
      <List sx={{width: 1, padding: 0}}>
        {props.isSuccess && props.listData
          ? props.listData.map((e, i) => {
              return (
                <ListItem
                  key={i}
                  sx={{justifyContent: 'space-between', padding: '8px 0'}}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={e.avatar}
                      variant="rounded"
                      alt={e.username}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{margin: '0 auto'}}
                    primary={e.name}
                    secondary={
                      <Typography
                        sx={{color: 'rgba(255,255,255,0.5)', fontSize: 14}}
                      >
                        {'@' + e.username}
                      </Typography>
                    }
                  />
                  <ListItemButton
                    className="followBtn"
                    selected={e.isFollowing}
                  >
                    {e.isFollowing ? 'Following' : 'Follow'}
                  </ListItemButton>
                </ListItem>
              );
            })
          : null}
      </List>
    );
  }
};

export default React.memo(UserList);
