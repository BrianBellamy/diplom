import {CssBaseline, createTheme, ThemeProvider,  } from '@mui/material';
import { useState } from 'react';
import './app.css'

import Header from './components/Layout.jsx';


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }, 
})

const LightTheme = createTheme()

const App = () => {
  const [dark, setDark] = useState(localStorage.theme === 'dark')

  const toggleDark = () => {
    localStorage.theme = !dark ? 'dark' : 'light' 
    setDark(!dark)
    
  }

  return (
    <ThemeProvider theme={dark ? darkTheme : LightTheme}>
        <CssBaseline/>
         
          <Header dark={dark} toggleDark={toggleDark} />
    </ThemeProvider>
  );
}

export default App;
