import { useState } from 'react';
import './App.css';
import Lists from './Components/Lists';
import Submits from './Components/Submit';

function App() {
  const [todoList, setTodoList] = useState([
    '에옹'
  ]);
  const [input, setInput ] = useState("");
  const onChange = e=> {
  }
  return (
    <div className="App">
      <Submits todoList={todoList}/>
      <Lists/>
    </div>
  );
}

export default App;
