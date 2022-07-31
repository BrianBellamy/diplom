import React from 'react'
import {ListItem, List, ListItemText, ListItemIcon,} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';



const MainMenu = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <List>
            <ListItem button 
            onClick={handleClick}
                to = "/"
                component = {NavLink}
            >
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary='Home'/>
                </ListItem>
            <ListItem button
            to = "/chat"
            component = {NavLink}>
            <ListItemIcon>
                  <ChatIcon/>
                </ListItemIcon>
                <ListItemText primary='Chat'/>
            </ListItem>
            <ListItem button
            to = "/staff"
            component = {NavLink}>
            <ListItemIcon>
                  <PersonPinIcon/>
                </ListItemIcon>
                <ListItemText primary='Staff'/>
            </ListItem>
          </List>
  )
}

export default MainMenu