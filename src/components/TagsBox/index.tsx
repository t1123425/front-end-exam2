import React from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoBox from '../InfoBox';
import {infoBoxProps} from '../../dataType';
const TagsBox: React.FC<infoBoxProps> = props => {
  return (
    <Box className="tagsItem">
      <InfoBox title={props.title} secondary={props.secondary}>
        <Box
          sx={{
            display: 'flex',
            width: '150px',
            minHeight: '150px',
            alignItems: 'flex-end',
            backgroundColor: 'rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '14px 0px',
            marginBottom: '10px',
          }}
        >
          <Typography
            sx={{
              width: 'calc(100% - 20px)',
              marginLeft: '10px',
              textAlign: 'center',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'primary.contrastText',
              border: '4px solid #FFFFFF',
              borderRadius: '8px',
              padding: '3px 0',
              textTransform: 'capitalize',
              boxSizing: 'border-box',
            }}
          >
            {props.title && props.title.length > 7
              ? props.title.slice(0, 6) + '...'
              : props.title}
          </Typography>
        </Box>
      </InfoBox>
    </Box>
  );
};

export default React.memo(TagsBox);
