import { Container, Row, Col, Stack } from 'react-bootstrap';
import { useParams } from "react-router-dom"

//2022-01-02T20:39:09.254Z
const formatDate = (d) => {
  return d
}


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
  <Container >
    <Row className="border-top border-bottom border-2 clearfix">
      <Col md="auto" className="float-start">ID: {msg._id}</Col> 
      <Col md="auto" className="float-start">Date: {formatDate(msg.date)}</Col> 
    </Row>
    <Row>
      Title: {msg.title}
    </Row>
    <Row>
      {msg.text}
    </Row>
  </Container> 
)
export default Messages
