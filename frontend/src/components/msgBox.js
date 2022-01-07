import { Container, Row, Col, Stack } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import formatDate from '../utils/helpers'



const Messages = ({msg}) => {
  const id = useParams().id
  return(
   <>
    {msg.map(m => (m._id === id) ? (<h2 className="cus-thread-title rounded" key={m._id}>{m.title}</h2>) : (null))}
    {msg.map((msg, index) => 
      (msg.answers === id || msg._id === id) ?
      (<MsgBox key={msg._id} msg={msg} index={index} />) :
      (null)
    )}
   </>
)}

const MsgBox = ({msg, index}) => (
  <Container >
    <Row className="clearfix cus-title-bar rounded">
      <Col md="auto" className="float-start">{index}</Col>
      <Col md="auto" className="float-start">{formatDate(msg.date)}</Col> 
    </Row>
    
    <Row className="cus-msg-field rounded">
      {msg.text}
    </Row>
  </Container> 
)
export default Messages
