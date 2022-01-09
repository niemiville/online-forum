import React, { useState, useEffect } from 'react'
import Messages from './components/msgBox'
import NewMsg from './components/newMsg'
import Thread from './components/thread'
import NewThread from './components/newThread'
import * as services from './services/services'
import { Container, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"

const App = () => {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    services.getAllThreads().then(t =>
      setThreads(t)
    ) 
  })

/*   useEffect(() => {
    const interval = setInterval(() => {
      services.getAllThreads().then(messages =>
        setThreads(messages)
      )  
    }, 3000);
    return () => clearInterval(interval);
  }, []) */

  return (
    <Container>
    <Router>
      <h1 className="centered">Online Forum</h1>
      <Switch>
        <Route path='/threads/:id'>
          <Link to='/'>back to threads</Link>
          <Messages getAllMessagesInThread={services.getAllMessagesInThread} threads={threads} />
          <NewMsg addMsg={services.addMsg} openButtonText={'Write a message'}/>
        </Route>
        <Route path='/'>
          <NewThread addThread={services.addThread} openButtonText={'Start a new thread'}/>
          <h2 className="cus-thread-title rounded">Threads</h2>
          {threads.map(thread =>
            <Thread key={thread._id} thread={thread} />
          )}
        </Route>
      </Switch>
    </Router>
    </Container>
  )
}

export default App
