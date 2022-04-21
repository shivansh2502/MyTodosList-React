import React from 'react'

export const Todo = (props) => {
  return (
    <div className='container bg-dark text-light my-2 p-3'>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}
