import React from 'react'
import Todo from './Todo'
const TidoList = ({todo,deleteHandler,handledone}) => {
  return (
    <div>
        {todo.map((el)=><Todo todo={el} deleteHandler={deleteHandler} handledone={handledone}/>)}
    </div>
  )
}

export default TidoList