import { Box, TextField, Button} from '@mui/material'
import React, {useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import '../app.css'

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
    complete: true
  },
]) 

const addTodo = () =>{
  const tmpArr = todos
  tmpArr.push({
    title: newTodo,
    complete: true
  })
  setTodos(tmpArr)
  setNewTodo('')
}


const deleteTodo = (index) =>{}
const toggleTodo = (index) =>{}

const [newTodo, setNewTodo] = useState("")


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
        <Box sx={{
          mt:2
        }}>
        {todos.length > 0 && 
        todos.map((todo, index) => {
          return(
            <div key={index}>
              {todo.title}
            </div>
          )
        })}
        </Box>
    </Box>
    
  )
}

export default Home