import { Box, TextField, Button, Stack } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import '../app.css'

const Home = () => {
  return (
    <Box>
   <TextField sx={{
    width: '100%',
   }}
          id="filled-multiline-static"
          label="Add Task"
          multiline
          rows={4}
          variant="filled"
        />
<Box sx={{
  display:'flex',
  justifyContent: 'space-between', 
  mt: 4,
}}>
      <Stack direction='row' spacing={2}>
      <Button
          sx={{
            textTransform: 'none'
          }}
           variant="contained" size='small'>For Tooday</Button>
           <Button
          sx={{
            textTransform: 'none'
          }}
           variant="contained" size='small'>For Tomorrow</Button>
      </Stack>

    <Stack direction='row' spacing={2}>

        <Button sx={{
          textTransform: 'none'
        }} size='small' variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button sx={{
        textTransform: 'none'
      }} size='small' variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
          </Stack>
        </Box>
    </Box>
  )
}

export default Home