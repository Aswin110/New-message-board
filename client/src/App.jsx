import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/board';
import axios from 'axios';

function App() {
  const apiUrl = import.meta.env.REACT_APP_API_BASE_URL ;

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function msg () {
      try{
        const res = await axios.get(`${apiUrl}/message`);
        setMessage(res.data);
        setLoading(false);
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
        
    try {
      await axios.post(`${apiUrl}/message/new`, messageData);
      const value = await axios.get(`${apiUrl}/message`); 
      setMessage(value.data);
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
