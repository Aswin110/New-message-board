import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function msg () {
      try{
        const data = await fetch('http://localhost:3000/message');
        const res = await console.log(data.json())
      }
      catch(error){
        console.log(error)
      }
    } 

    msg();
  },[])

  


  return (
    <h1 className="text-3xl font-bold underline">
      Hello world! {message}
    </h1>
  )
}

export default App
