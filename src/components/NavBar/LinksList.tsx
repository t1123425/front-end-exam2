import React from 'react';
import {NavLink} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {ReactComponent as MySvg} from '../../assets/imgs/menuIcon.svg';
import ListItemIcon from '@mui/material/ListItemIcon';
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
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '12px',
    color: '#8A8A8F',
    fill: '#8A8A8F',
    margin: 0,
    '&[aria-current="page"]': {
      color: '#fff',
      fill: '#fff',
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
              className="column"
            >
              <ListItemIcon className="blockIcon">
                <MySvg />
              </ListItemIcon>
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
