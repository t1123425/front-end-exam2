import React from 'react';
import {Box} from '@mui/material';
import InfoBox from '../InfoBox';
import {infoBoxProps, userData} from '../../dataType';

const ResultBox: React.FC<infoBoxProps> = props => {
  return (
    <Box sx={{marginBottom: '31px'}}>
      <InfoBox title={props.title} secondary={props.secondary}>
        <Box>
          <img />
        </Box>
      </InfoBox>
    </Box>
  );
};
