import Todolist from './Components/Todolist';
import Todolistapp from './Components/Todolistapp'
import './App.css';
import { useState } from 'react';

function App() {
  const [todolist,setTodolist]=useState([]);
  let addlist= (listApp)=>{
    if(listApp !== "")
    setTodolist([...todolist,listApp]);
  }

  const itemDelete=(key)=>{
    let newListTodo = [...todolist];
    newListTodo.splice(key,1);
    setTodolist([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
          <Todolist addlist={addlist}/>
           {todolist.map((itemIndex,i)=>{
            return(
              <Todolistapp key={i} index={i} item={itemIndex} itemDelete={itemDelete}/>
            )
           })}
      </div>
    
    </div>
  );
}

export default App;
