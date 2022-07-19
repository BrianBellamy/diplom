import React from 'react'
import {ListItem, List, ListItemText, ListItemIcon, ListItemButton,} from '@mui/material'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ChatIcon from '@mui/icons-material/Chat';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { NavLink } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';



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
                  <FeaturedPlayListIcon/>
                </ListItemIcon>
                <ListItemText primary='Tasks'/>
                {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
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