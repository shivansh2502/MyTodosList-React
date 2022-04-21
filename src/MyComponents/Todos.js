import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import {Todo} from './Todo'

export const Todos = (props) => {
  
  let myStyle = {
    minHeight: "70vh"
  }

  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center my-3'>Todo's List</h3>
      {props.todos.length===0?"No Todos to Display" : 
        props.todos.map((todo)=>{
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}></Todo>
      })}
      
    </div> 
  )
}
