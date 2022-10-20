import React from 'react'

const Todo = ({todo,deleteHandler,handledone}) => {
const deleteTodo=()=>{
    deleteHandler(todo.id)
}  
const changetodo=()=>{
    handledone(todo.id)
}
    return (

    <div>
        <ul>
            <li>{todo.text} 
            <button onClick={()=>deleteTodo()}>remove</button> 
            <button onClick={()=>changetodo()}> { todo.isDone ? " Yep you did it " : "not yet"}</button></li>
        </ul>
    </div>
  )
}

export default Todo