import React, {useState, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {
  useGetAllDataQuery,
  useGetFriendsQuery,
} from '../../features/api/apiSlice';
import Avatar1 from '../../assets/imgs/avatar1.png';
interface followListProps {
  isShow?: boolean;
  width?: number | string;
}
interface userData {
  name: string;
  username: string;
  isFollowing: boolean;
  avater: string;
}
interface userFollowStatus {
  [key: string]: userData[];
  Followers: userData[];
  Following: userData[];
}
const FollowList: React.FC<followListProps> = props => {
  const [value, setValue] = useState(0);
  const followerTabs: string[] = ['Followers', 'Following'];
  const followerMockData: userFollowStatus = {
    Followers: [
      {
        name: 'test1',
        username: '@test1',
        isFollowing: false,
        avater: `${Avatar1}`,
      },
      {
        name: 'test2',
        username: '@test2',
        isFollowing: false,
        avater: `${Avatar1}`,
      },
      {
        name: 'test3',
        username: '@test3',
        isFollowing: false,
        avater: `${Avatar1}`,
      },
    ],
    Following: [
      {
        name: 'test4',
        username: '@test4',
        isFollowing: true,
        avater: `${Avatar1}`,
      },
    ],
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  // function renderList(tabValue: number) {
  //   const renderContent = null;
  //   if(tab){

  //   }
  //   return renderContent;
  // }
  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        maxWidth: 375,
        width: props.width ? props.width : 1,
        height: 1,
        backgroundColor: 'primary.main',
        opacity: props.isShow ? 1 : 0,
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    >
      <Box sx={{borderBottom: 1, borderColor: '#1F1F1F', paddingTop: '32px'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab label="Followers" {...a11yProps(0)} />
          <Tab label="Following" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Container sx={{padding: '0 16px'}} disableGutters>
        <List sx={{width: 1}}>
          {followerMockData[followerTabs[value]].map((e, i) => {
            return (
              <ListItem
                key={i}
                sx={{justifyContent: 'space-between', padding: '8px 0'}}
              >
                <ListItemAvatar>
                  <Avatar
                    src={Avatar1}
                    variant="rounded"
                    alt="Follower"
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={e.name}
                  secondary={
                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>
                      {e.username}
                    </Typography>
                  }
                />
                <ListItemButton className="followBtn" selected={e.isFollowing}>
                  {e.isFollowing ? 'Following' : 'Follow'}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Box>
  );
};

export default FollowList;
