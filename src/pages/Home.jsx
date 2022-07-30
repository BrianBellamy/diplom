import { Box, TextField, Button, List, ListItem, ListItemText, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography} from '@mui/material'
import React, {useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import '../app.css'
import Checkbox from '@mui/material/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { bgcolor } from '@mui/system';

const Home = () => {

const [todos, setTodos] = useState([
  {
    title: 'Learn HTML/CSS',
    complete: true
  },
  {
    title: 'Learn JS',
    complete: true
  },
  {
    title: 'Do fc diplom',
    complete: false
  },
]) 

const addTodo = () =>{
  const tmpArr = todos
  tmpArr.push({
    title: newTodo,
    complete: false
  })
  setTodos([...tmpArr])
  setNewTodo('')
}


const ConfirmDeleteTodo = (index) => {
    setIndexToDelete(index)
    setShowDialog(true)
}


const deleteTodo = (index) => {
  const tmpArr = todos
  tmpArr.splice(indexToDelete, 1)
  setTodos([...tmpArr])
  setShowDialog(false)
  setIndexToDelete(-1)
}


const toggleTodo = (index) =>{
  const tmpArr = todos
  tmpArr[index].complete=!tmpArr[index].complete
  setTodos([...tmpArr])
}

const closeDialog = () => {
  setShowDialog(false)
}


const [showDialog, setShowDialog] = useState(false)
const [newTodo, setNewTodo] = useState("")
const [indexToDelete, setIndexToDelete]= useState(-1)


  return (
    <React.Fragment>
        <Box sx={{
    boxShadow: '2',
    padding: 3
   }}> 
        <TextField sx={{
    width: '100%',
   }}
          id="filled-multiline-static"
          label="Add Task"
          multiline
          rows={4}
          variant="filled"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
<Box sx={{
  display:'flex',
  justifyContent: 'space-between', 
  mt: 4,
}}>
        <Button sx={{
          textTransform: 'none'
        }} size='small' 
        disabled={!newTodo}
        variant="outlined" 
        startIcon={<AddCircleOutlineIcon />}
        onClick={addTodo}
        >
        Add Task
      </Button>
        
      </Box>
    </Box>
    
    <List sx={{
      mt:2,
      boxShadow: '2',
    }}>
    {todos.length > 0 &&
    todos.map((todo, index) => {
      return(
        <ListItem key={index}
        secondaryAction={
          <React.Fragment>
            <IconButton 
            onClick = {() => toggleTodo(index)}
            >
              {
                 todo.complete ?
                 <CheckBoxIcon color='success'/>
                 : <CheckBoxOutlineBlankIcon/>
              }
           </IconButton>
            <IconButton onClick = {() => ConfirmDeleteTodo(index)}>
              <DeleteIcon color='error'/>
           </IconButton>
          </React.Fragment>
        }>
          <ListItemText primary={todo.title}
          secondary={todo.complete ? 'complete': 'incomplete'}>
          
          </ListItemText>
        </ListItem>
      )
    })}
    {todos.length === 0 && (
      <ListItem>
        <ListItemText primary='Not todos yet...'>

        </ListItemText>
      </ListItem>
    )}
      </List>

        <Dialog 
        open={showDialog}
        onClose={closeDialog}
        >
          <DialogTitle>
            COnfir deliting
          </DialogTitle>
          <DialogContent>
            <DialogContentText component='div'>
              Are your sure you want to delete?
              <Typography variant='h5' component='p'>
                  {indexToDelete >= 0 && todos[indexToDelete].title}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='error' onClick={deleteTodo}> Yes</Button>
            <Button variant='contained' color='success' onClick={closeDialog}>No</Button>
          </DialogActions>
          
        </Dialog>

    </React.Fragment>
    
    
  )
}

export default Home