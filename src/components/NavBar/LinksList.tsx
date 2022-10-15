import React from 'react';
import {NavLink} from 'react-router-dom';
import List from '@mui/material/List';
interface LinksData{
    name:string,
    path:string
}
interface ListProps{
    links?:LinksData[]
}
const LinksList:React.FC<ListProps> = props => {
    return (
        <div></div>
    )
}

export default LinksList
