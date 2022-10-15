import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BPMatches from '../../helpers/BreakPointMatch';
function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const FollowList:React.FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            maxWidth:375,
            width:1,
            height:1,
            backgroundColor:'primary.main',
            display:BPMatches('lg')?'none':'block',
            position:'fixed',
            top:0,
            right:0
        }}>
            <Box sx={{ borderBottom: 1, borderColor: '#1F1F1F' }}>
                <Tabs value={value} onChange={handleChange} centered variant="fullWidth" aria-label="basic tabs example">
                    <Tab label="Followers" {...a11yProps(0)} />
                    <Tab label="Following" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <Container></Container>
        </Box>
    )
}

export default FollowList
