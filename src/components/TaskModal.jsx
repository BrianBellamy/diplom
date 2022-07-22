import * as React from 'react';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, TextField, Button, Stack, IconButton, Tooltip} from '@mui/material'



const style = {
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const TaskModal = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

      <Button size='small' onClick={handleOpen}>
      <Tooltip title="Add Task">
        <IconButton sx={{
            color: '#ffff',
        }}>
        <AddIcon/>
        </IconButton>
        </Tooltip>
            </Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>
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
        
      </Modal>
    </div>
  );
}

export default TaskModal