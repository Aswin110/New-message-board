import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/board';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function msg () {
      try{
        const res = await axios.get('http://localhost:3000/message');
        setMessage(res.data);
        // console.log(res[0].name);
        setLoading(false);
        window.scrollTo(0, document.body.scrollHeight);
      }
      catch(error){
        console.log(error)
      }
    } 
    msg();
    
  },[])

  const postData = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const name = data.get('name');
    const messageText = data.get('message');
    const messageData = {name, message: messageText}
    // console.log(e);
    console.log('message',messageData);
    
    try {
      await axios.post('http://localhost:3000/message/new', messageData);
      const value = await axios.get('http://localhost:3000/message'); 
      setMessage(value.data);
      console.log(value.data);
    } catch (error) {
      console.log(error);
      alert('Server error');
    }
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
