import React, { useState } from 'react'

const AddTodo = ({handeladd}) => {
    const [input,setInput]=useState("")
    const handletodo=()=>{
        handeladd({
            text : input,
            id : Math.random(),
            isDone : false
        })
    }
  return (
    <div>
        <input type="text" placeholder='enter the text you wanna add' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={()=>handletodo()}>add</button>
    </div>
  )
}

export default AddTodo