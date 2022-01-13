import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import formatDate from '../utils/helpers'


const Messages = ({getAllMessagesInThread, threads}) => {
  const [messagesInThread, setMessagesInThread] = useState([])
  const threadId = useParams().id
  const firstMessage = threads.find(t => t._id === threadId)

/*   useEffect(() => {
    getAllMessagesInThread(threadId).then(messages =>
      setMessagesInThread(messages)
    ) 
  }) */

  useEffect(() => {
    const interval = setInterval(() => {
      getAllMessagesInThread(threadId).then(messages =>
        setMessagesInThread(messages)
      )  
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return(
   <>
    <FirstMsgBox msg={firstMessage} />
    {messagesInThread.map((msg, index) => 
      <MsgBox key={msg._id} msg={msg} index={index+1} />
    )}
   </>
)}

const FirstMsgBox = ({msg}) => (
  <Container>
    <Row><h2 className="cus-thread-title rounded" key={msg._id}>{msg.title}</h2></Row>
    <Row className="clearfix cus-title-bar rounded">
      <Col md="auto" className="float-start">1</Col>
      <Col md="auto" className="float-start">{formatDate(msg.date)}</Col> 
    </Row>
    
    <Row className="cus-msg-field rounded">
      {msg.text}
    </Row>
  </Container> 
)

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
