import React from 'react';
import { Grid ,Box} from '@mui/material';
import Typography from '@mui/material/Typography';
const Tags:React.FC = () => {
    return (
        <Box sx={{display:'flex',flexDirection:'column',paddingTop:'80px'}}>
           <Typography variant="h1" className='pageTitle' color="primary.contrastText">
                Tags
            </Typography>
             <Grid container>
                <Grid item></Grid>
            </Grid>
        </Box>
    )
}

export default Tags;
