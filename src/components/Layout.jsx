import {Paper, Toolbar, IconButton, Typography, Divider, List, } from '@mui/material'
import React, {useState} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@emotion/react';
import {Route, Routes } from 'react-router-dom'
import { DrawerHeader, CustomAppBar, CustomDrawer } from './layout/styled';

import Home from '../pages/Home';
import Task from '../pages/Task';
import Chat from '../pages/Chat';
import Staff from '../pages/Staff';
import MainMenu from './MainMenu';
import PersonalModal from './PersonalModal';
import { NavLink } from 'react-router-dom';
import TaskModal from './TaskModal';







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
          <IconButton button
            to = "/"
            component = {NavLink}
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
            <TaskModal/>
          <Box sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            mr: 3
          }}>
          <PersonalModal/>
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
      <Route path="/" element={<Home/>}/>
      <Route path="/task" element={<Task/>}/>
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