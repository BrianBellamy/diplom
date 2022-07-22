import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Tooltip, IconButton, Avatar,} from '@mui/material';

const style = {
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const PersonalModal = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Tooltip title="Open settings">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            </Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>
          <Tooltip title="Change Photo">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" 
                sx={{
                  width: 128, height: 128,
                }}
                />
              </IconButton>
            </Tooltip>
          <Typography sx={{
            fontSize: 12,
          }}>
            Change Photo
          </Typography>
          <Typography  
          sx={{ 
            mt: 2, 
            fontWeight: 800
          }} variant='h6'>
          Cameron Williamson
          </Typography>
          <Typography  
          sx={{ 
            mt: 1, 
            fontWeight: 600,
            fontStyle: 'italic'
          }}>
          Warker
          </Typography>
          <Typography  
          sx={{ 
            mt: 2, 
            fontWeight: 800
          }} variant='h6'>
          Organization
          </Typography>
          <Typography  
          sx={{ 
            mt: 1, 
            fontWeight: 600,
            fontStyle: 'italic'
          }}>
          “Some name organization”
          </Typography>
          <Button onClick={handleClose}
          sx={{
            mt: 4,
            textTransform: 'none'
          }}
           variant="contained" size='small'>Apply</Button>
        </Box>
        
      </Modal>
    </div>
  );
}

export default PersonalModal