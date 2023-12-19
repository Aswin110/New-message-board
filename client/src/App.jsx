import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/board';

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function msg () {
      try{
        const data = await fetch('http://localhost:3000/message');
        const res = await data.json();
        setMessage(res);
        console.log(res[0].name);
      }
      catch(error){
        console.log(error)
      }
    } 
    msg();
    
  },[])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Mini Message Board
      </h1>
      <Board
        messages = {message}
        />
    </>
  )
}

export default App
