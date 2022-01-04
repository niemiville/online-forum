import { Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom"

const Messages = ({msg}) => {
  const id = useParams().id
  return(
   <>
    {msg.map(msg => 
      (msg.answers === id) ?
      (<MsgBox key={msg._id} msg={msg} />) :
      ((msg._id === id) ? 
      (<MsgBox key={msg._id} msg={msg} />) :
      (null))
    )}
   </>
)}

const MsgBox = ({msg}) => (
  <Row>
  <b>ID: {msg._id}</b> 
  <b>Date: {msg.date}</b> 
  <b>Title: {msg.title}</b>
  <p>{msg.text}</p>
  <p>---</p>
  </Row> 
)
export default Messages
