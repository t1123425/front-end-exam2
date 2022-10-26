import React from 'react';
import {Box, Typography} from '@mui/material';
interface ErrorProps {
  message: string;
}
const ErrorBlock: React.FC<ErrorProps> = props => {
  return (
    <Box sx={{width: 1, padding: '90px 24px'}}>
      <Typography sx={{margin: '10px auto', textAlign: 'center'}}>
        {props.message}
      </Typography>
    </Box>
  );
};

export default ErrorBlock;
