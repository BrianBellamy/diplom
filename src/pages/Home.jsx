import { Box, TextField, Button, Typography, List, ListItem, ListItemText, IconButton} from '@mui/material'
import React, {useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import '../app.css'
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
    complete: true
  })
  setTodos([...tmpArr])
  setNewTodo('')
}


const deleteTodo = (index) =>{
  const tmpArr = todos
  tmpArr.splice(index, 1)
  setTodos([...tmpArr])
}
const toggleTodo = (index) =>{}

const [newTodo, setNewTodo] = useState("")


  return (
    <Box>
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
          <IconButton onClick = {() => deleteTodo(index)}>
            <DeleteIcon/>
          </IconButton>
        }>
          <ListItemText primary={todo.title}
          secondary={todo.complete ? 'complete': 'incomplete'}>
          
          </ListItemText>
        </ListItem>
      )
    })}
      </List>
    </Box>
    
    
  )
}

export default Home