import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App
