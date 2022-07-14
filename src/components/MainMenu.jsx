import React from 'react'
import {ListItem, List, ListItemText, ListItemIcon, } from '@mui/material'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ChatIcon from '@mui/icons-material/Chat';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <List>
            <ListItem button 
                to = "/"
                component = {NavLink}
            >
                <ListItemIcon>
                  <FeaturedPlayListIcon/>
                </ListItemIcon>
                <ListItemText primary='Tasks'/>
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