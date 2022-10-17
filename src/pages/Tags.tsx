import React from 'react';
import { Grid ,Box} from '@mui/material';
import Typography from '@mui/material/Typography';
const Tags:React.FC = () => {
    return (
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Typography variant="h1" sx={{fontSize:'1.8rem',margin:'80px 0 24px'}} color="primary.contrastText">
                Tags
            </Typography>
             <Grid container>
                <Grid item></Grid>
            </Grid>
        </Box>
    )
}

export default Tags;
