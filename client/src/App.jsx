import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/board';

function App() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function msg () {
      try{
        const data = await fetch('http://localhost:3000/message');
        const res = await data.json();
        setMessage(res);
        // console.log(res[0].name);
        setLoading(false);
      }
      catch(error){
        console.log(error)
      }
    } 
    msg();
    
  },[])

  const postData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    // console.log(e);
    console.log('name:', data.get('name'), ', message:', data.get('message') );
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Mini Message Board
      </h1>
      <Board
        messages = {message}
        postData ={postData}
        loading = {loading}
      />
    </>
  )
}

export default App
