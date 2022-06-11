import {AppBar, Toolbar, IconButton, Typography, Drawer, Divider, ListItem, List, } from '@mui/material'
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




const DrawerHeader = styled('div')(
  ({theme}) => (
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1), 
      ...theme.mixins.toolbar
    }
  )
  )



const Header = (props) => {
    const {dark, toggleDark} = props
    const [open, setOpen] = useState (false)

    const theme = useTheme()
    
    
    const handleOpen = () => {
      setOpen(true)
    }
    const handleClose = () => {
      setOpen(false)
    }

    const toggleOpen = () => {
      setOpen(!open)
    }

  return (
    <React.Fragment>
    <AppBar>
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
    </AppBar>
    <Drawer open={open} onClose = {handleClose}>
        <DrawerHeader>
          <IconButton>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider/>
          <List>
            <ListItem button>

            </ListItem>
          </List>
    </Drawer>
    </React.Fragment>
  )
}

export default Header