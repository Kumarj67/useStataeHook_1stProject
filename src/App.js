import Header from './components/Header';
import './App.css';
import React,{useState} from 'react';


function App() {
  const [num,setNum]=useState(1)

  function add(){
setNum(num+1)

  }
  function remove(){
    setNum(num-1)
  }
  
  return (
<>
    <div className="App">
    <Header/>
     </div>
     <div className="main">
     <h1 className="heading" >{num}</h1>
     <div className="buttons">
     <button className='btn-add' onClick={add}>Add</button>
     <button className='btn-remove' onClick={remove}>Remove</button>
     </div>
    
      
      
     </div>
     </>
    
  );
}

export default App;
