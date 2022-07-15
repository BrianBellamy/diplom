import {Paper, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, ListItem, List, ListItemText, ListItemIcon, Collapse, ListItemButton, } from '@mui/material'
import React, {useState} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Route, Routes } from 'react-router-dom'
import { DrawerHeader, CustomAppBar, CustomDrawer } from './layout/styled';

import Task from '../pages/Task';
import Chat from '../pages/Chat';
import Staff from '../pages/Staff';
import MainMenu from './MainMenu';
import ListMenu from './ListMenu';







const Layout = (props) => {
    const {dark, toggleDark} = props
    const [open, setOpen] = useState (false)

    const theme = useTheme()
    
    
    const handleClose = () => {
      setOpen(false)
    }

    const toggleOpen = () => {
      setOpen(!open)
    }

    
    const handleClick = () => {
      setOpen(!open);
    };


  return (
    <Box sx = {{display: 'flex'}}>
    <CustomAppBar open={open}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {toggleOpen}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <AddIcon />
          </IconButton>
          <Box sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            mr: 3
          }}>
          <Tooltip title="Open settings">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Box sx={{
                  mr: 2,
                  ml: 1,
                  
                  alignItems: 'start'

                }}>
                  <Typography>
                  Cameron Williamson
                  </Typography>
                  <Typography sx= {{
                  fontSize: 12
                  }}>
                  Worker
                  </Typography>
                </Box>
              </Box>
        <IconButton 
        onClick={toggleDark} 
        color={dark ? 'primary' : 'inherit'} 
        sx={{
            bgcolor: dark ? 'paper' : 'primary.light'
        }}
        >
            {dark ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
        </Toolbar>
    </CustomAppBar>
    <CustomDrawer variant='permanent' open={open} onClose = {handleClose}>
        <DrawerHeader>
          <IconButton onClick={handleClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <MainMenu/>
    </CustomDrawer>
    <Box sx ={{flexGrow: 1, padding: theme.spacing(3)}}>
      <DrawerHeader/>
      <Paper sx={{
        padding: theme.spacing(3)
      }}>
        <Routes>
      <Route path="/" element={<Task/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/staff" element={<Staff/>}/>
      </Routes>
        </Paper>
        
        <List/>
    </Box>
    </Box>
  )
}

export default Layout