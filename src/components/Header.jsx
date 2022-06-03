import {AppBar, Toolbar, IconButton, Typography, } from '@mui/material'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';



const Header = (props) => {
    const {dark, toggleDark} = props
  return (
    <AppBar>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        <IconButton 
        onClick={toggleDark} 
        color={dark ? 'primary' : 'default'} 
        sx={{
            bgcolor: dark ? 'paper' : 'primary.light'
        }}
        >
            {dark ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header