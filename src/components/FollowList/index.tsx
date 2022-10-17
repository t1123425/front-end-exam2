import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
interface followListProps{
    isShow?:boolean,
    width?:number | string
}
const FollowList:React.FC<followListProps> = props => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            maxWidth:375,
            width:props.width?props.width:1,
            height:1,
            backgroundColor:'primary.main',
            opacity:props.isShow?1:0,
            position:'fixed',
            top:0,
            right:0
        }}>
            <Box sx={{ borderBottom: 1, borderColor: '#1F1F1F',paddingTop:'32px'}}>
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
