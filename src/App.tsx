import React, { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';



function App() {
  const [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' }
  ]
  )

  let [title, setTitle] = useState('')

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message])
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  return (
    <div className={"App"}>
      <Input setTitle={setTitle} title={title} />
      <Button name={"+"} caLLBack={callBackButtonHandler} />
      {message.map((element, index) => {
        return (
          <div key={index}>{element.message}</div>
        )
      })}
    </div>
  );
}



export default App;
