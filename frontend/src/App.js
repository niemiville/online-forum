import React, { useState, useEffect } from 'react'
import Messages from './components/msgBox'
import NewMsg from './components/newMsg'
import Thread from './components/thread'
import * as msgService from './services/messages'
import { Container, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"

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
    <Router>
      <h1>Online Forum</h1>
      <Switch>
        <Route path='/threads/:id'>
          <h2>Messages</h2>
          <Messages msg={messages} />
          <NewMsg addMsg={msgService.addMsg} openButtonText={'Write a message'}/>
        </Route>
        <Route path='/threads'>
          <NewMsg addMsg={msgService.addMsg} newThread={'true'} openButtonText={'Start a new thread'}/>
          <h2>Threads</h2>
          {messages.map(msg =>
            (msg.isFirst === true) ?
            (<Thread key={msg._id} msg={msg} />) : 
            (null)
          )}
        </Route>
        
      </Switch>
    </Router>
    </Container>
  )
}

export default App
