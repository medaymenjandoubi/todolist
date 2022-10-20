import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import TidoList from './TidoList';
import AddTodo from './AddTodo';
function App() {
  const [todo,setTodo]=useState([
    {text :'first todo list' , id :1,isDone :false},
    {text :'scd todo' , id :2 ,isDone :false},
    {text :'3eme todo' , id :3, isDone :false}
  ])
  const deleteHandler=(ID)=>{
          setTodo(todo.filter((el)=> el.id !== ID))
  }
  const handledone=(ID)=>{
    setTodo(todo.map((el)=> el.id === ID ? {...el,isDone : !el.isDone} : el) )
  }
  const handeladd=(newTodo)=>{
    setTodo(
      [...todo,newTodo]
    )
  }
  return (
    <div className="App">
    <TidoList todo={todo} deleteHandler={deleteHandler} handledone={handledone}/>
    <AddTodo handeladd={handeladd}/>
    </div>
  );
}

export default App;
