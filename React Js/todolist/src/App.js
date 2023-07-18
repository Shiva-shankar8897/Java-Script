import logo from './logo.svg';
import './App.css';
import Todolist from './components/todolist/todolist';
import { useState } from 'react';

function App() {
  const [todo,setTodo]=useState('')
   const handletodo = (event) => {
    setTodo(event.target.value)
    //console.log(event)
   }
   const [todoitem,setTodoItem]=useState([])
   const handleAdd=()=>{
    //const date=new Date()
    const newTodo={
      id:todoitem.length+1,
      todoItem:todo}
    console.log(todo)
   setTodoItem([...todoitem,newTodo])
   setTodo('')
  }
  return (
    <div>
      <h1>Todolist Application</h1>
      
      <input type='text' value={todo}placeholder='Enter todo' onChange={handletodo}/> < nbsp/> 
      <button onClick={handleAdd}>Add Todo</button>
      <div>
        {console.log(todoitem)}
      {todoitem.map((todolistitem,index)=> <Todolist  key={todoitem.id} item={todolistitem} setTodoItem={setTodoItem} todoitem={todoitem}/>)}
      </div>
    </div>
  );
}

export default App;
