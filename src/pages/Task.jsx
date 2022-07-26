import { Box, Typography } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Task = () => {
  return (
    <Box>
        <Typography variant='p'>
        Lorem ipsum dolor sit amet. Qui nihil ipsa quo error explicabo vel totam quisquam ut saepe nobis est molestias magni et consequuntur molestiae! 
    </Typography>

    <FormGroup sx={{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 3
    }}>
      <FormControlLabel control={<Checkbox  color='error' />} label="Not Done" />
      <FormControlLabel control={<Checkbox color='success' />} label="Done" />
    </FormGroup>
   
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
    <Typography variant='p' sx={{
      fontSize: 14,
      fontWeight: 600
    }}>
    Cameron Williamson
    </Typography>
    <Typography variant='p' sx={{
      fontSize: 14,
      fontWeight: 300
    }}>
    For All
    </Typography>
    <Typography variant='p' sx={{
      fontSize: 14,
      fontWeight: 300
    }}>
   October 29, 2017/October 30, 2022
    </Typography>
    </Box>
    
  
    </Box>
  )
}

export default Task