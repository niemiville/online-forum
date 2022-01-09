import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import formatDate from '../utils/helpers'


const Messages = ({getAllMessagesInThread, threads}) => {
  const [messagesInThread, setMessagesInThread] = useState([])
  const threadId = useParams().id

  useEffect(() => {
    getAllMessagesInThread(threadId).then(messages =>
      setMessagesInThread(messages)
    ) 
  })

  return(
   <>
    {threads.map(m => (m._id === threadId) ? 
    (<div><h2 className="cus-thread-title rounded" key={m._id}>{m.title}</h2>
    <MsgBox key={m._id+1} msg={m} index={0} /></div>) : (null))}
    {messagesInThread.map((msg, index) => 
      <MsgBox key={msg._id} msg={msg} index={index+1} />
    )}
   </>
)}

const MsgBox = ({msg, index}) => (
  <Container >
    <Row className="clearfix cus-title-bar rounded">
      <Col md="auto" className="float-start">{index+1}</Col>
      <Col md="auto" className="float-start">{formatDate(msg.date)}</Col> 
    </Row>
    
    <Row className="cus-msg-field rounded">
      {msg.text}
    </Row>
  </Container> 
)
export default Messages
