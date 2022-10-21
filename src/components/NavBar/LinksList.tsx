import React from 'react';
import {NavLink} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
interface LinksData {
  name: string;
  path: string;
}
interface ListProps {
  links?: LinksData[];
  listDirect?: string;
}
const LinksList: React.FC<ListProps> = props => {
  const linkStyles = {
    textAlign: 'center',
    fontSize: '12px',
    color: '#8A8A8F',
    '&[aria-current="page"]': {
      color: '#fff',
    },
  };
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: props.listDirect ? props.listDirect : 'column',
      }}
    >
      {props.links &&
        props.links.map((e, i) => {
          return (
            <ListItem
              key={i}
              component={NavLink}
              end={e.name === 'Home'}
              sx={linkStyles}
              to={e.path}
            >
              <ListItemText
                primary={e.name}
                sx={{'& .MuiTypography-root': {fontSize: '12px'}}}
              ></ListItemText>
            </ListItem>
          );
        })}
    </List>
  );
};

export default LinksList;
