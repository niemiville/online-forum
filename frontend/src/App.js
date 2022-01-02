import React, { useState, useEffect } from 'react'
import MsgBox from './components/msgBox'
import NewMsg from './components/newMsg'
import * as msgService from './services/messages'
import { Container, Row } from 'react-bootstrap';

const App = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      msgService.getAll().then(messages =>
        setMessages(messages)
      )  
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Container>
      <h1>Online Forum</h1>
      <h2>Send new message</h2>
      <NewMsg addMsg={msgService.addMsg} />
      <h2>Messages</h2>
      {messages.map(msg =>
        <MsgBox key={msg._id} msg={msg} />
      )}
    </Container>
  )
}

export default App
