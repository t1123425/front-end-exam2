import React, {useState, useRef} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Followers from './Followers';
import Following from './Following';
import {useBottomScrollListener} from 'react-bottom-scroll-listener';
import {CallChildFunction} from '../../dataType';
interface followListProps {
  isShow?: boolean;
  width?: number | string;
}
const FollowList: React.FC<followListProps> = props => {
  const [tabsIndex, setTabsIndex] = useState(0);
  const FollowersRef = useRef<CallChildFunction>(null);
  const scrollRef = useBottomScrollListener<HTMLDivElement>(() => {
    console.log('at bottom');
    //FollowersRef.current?.updatepage();
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabsIndex(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  function renderList() {
    if (tabsIndex === 0) {
      return <Followers ref={FollowersRef} />;
    } else {
      return <Following />;
    }
  }
  return (
    <Box
      sx={{
        maxWidth: 375,
        width: props.width ? props.width : 1,
        height: 1,
        backgroundColor: 'primary.light',
        visibility: props.isShow ? 'visible' : 'hidden',
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    >
      <Box sx={{paddingTop: '32px'}}>
        <Tabs
          value={tabsIndex}
          onChange={handleChange}
          centered
          variant="fullWidth"
          aria-label="basic tabs example"
          sx={{
            '.MuiTabs-indicator': {
              backgroundColor: '#fff',
            },
          }}
        >
          <Tab label="Followers" {...a11yProps(0)} />
          <Tab label="Following" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Container
        sx={{padding: '24px 16px 65px', height: 1, overflowY: 'auto'}}
        className="invisibleScroll"
        disableGutters
        ref={scrollRef}
      >
        {renderList()}
      </Container>
    </Box>
  );
};

export default FollowList;
