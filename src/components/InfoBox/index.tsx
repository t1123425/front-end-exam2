import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
interface infoProps {
  title?: string;
  secondary?: string;
}
const InfoBox: React.FC<infoProps> = (props, children) => {
  return (
    <Box sx={{flexGrow: 1}}>
      {children}
      <Typography variant="h2" sx={{fontSize: '14.9px'}}>
        {props.title}
      </Typography>
      <Typography
        sx={{
          fontSize: '11px',
          color: '#B2B2B2',
          letterSpacing: '0.3725px',
        }}
      >
        {props.secondary}
      </Typography>
    </Box>
  );
};

export default InfoBox;
