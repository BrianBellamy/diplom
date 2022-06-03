import {CssBaseline, createTheme, ThemeProvider,  } from '@mui/material';
import { useState } from 'react';

import Header from './components/Header';


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }, 
})

const LightTheme = createTheme()

const App = () => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
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
