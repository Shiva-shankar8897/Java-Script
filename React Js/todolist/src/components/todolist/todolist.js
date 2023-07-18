import React from 'react'
import './todolist.css'

function Todolist({item,todoitem,setTodoItem}) {
  const deletetodo = (id) => {
    console.log(todoitem)
   const filtertodolist = todoitem.filter((item) => item.id !== id)
   setTodoItem(filtertodolist)
  }
  const markedTodo=(id)=>{
   console.log(id)
   const markedItemtodo=todoitem.map((item)=>{
    if(item.id===id){
      return{
        ...item,
        marked:!item.marked
      }
    }else{
      return item
    }
   })
   setTodoItem(markedItemtodo)
  
  }
  return (
    <div>
       {console.log(todoitem)}
      <span className={`${item.marked===true?'markeditem':""}`}onClick={ () => markedTodo(item.id)} >{item.todoItem}</span> <nbsp/>
      <button onClick={()=>{deletetodo(item.id)}}>Close</button>
    </div>
  )
}

export default Todolist
