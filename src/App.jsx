import React, { useState } from 'react'
import  './style.css'

const App = () => {

  const [chat, setChat] = useState('')
  const [text, setText] = useState([])

  const handleAddSend = () => {
      if(chat !== ""){
    setText([...text, chat])
      }

    setChat('')
  }

  return (
    <div className='container'>
      <div className='output'>
          <ul>
                            {text.map((chat, index) => (
                                <li key={index} className='sent'>{chat}</li>
                            ))}            </ul>
      </div>

    <div className='user-controls'>
        <input type='text' placeholder='Message' onChange={(event) => setChat(event.target.value)} value={chat}/>
        <button onClick={handleAddSend}> Send </button>
    </div>
    </div>
  )
}

export default App