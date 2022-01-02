import { Container, Row } from 'react-bootstrap';

const MsgBox = ({msg}) => (
  <Row>
    <b>ID: {msg._id}</b> 
    <p></p>
    <b>Date: {msg.date}</b> 
    <p>{msg.text}</p>
    <p>---</p>
  </Row>  
)

export default MsgBox
