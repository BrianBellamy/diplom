import { Box, Typography } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Task = () => {
  return (
    <Box>
        <Typography variant='p'>
        Lorem ipsum dolor sit amet. Qui nihil ipsa quo error explicabo vel totam quisquam ut saepe nobis est molestias magni et consequuntur molestiae! Et autem fugit ea galisum deserunt et totam suscipit est voluptates labore aut voluptatem provident qui voluptatibus velit qui soluta modi. Ea omnis atque est maiores ipsa aut ipsam fuga quo aliquam voluptatem id animi vitae. Ut earum autem ea tenetur ratione sit expedita voluptatem.
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