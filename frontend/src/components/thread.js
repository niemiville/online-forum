import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"
import formatDate from '../utils/helpers'

const Thread = ({msg}) => {
  const threadLink = `/threads/${msg._id}`

  return(   
    <Container>
      <Row className="clearfix cus-title-bar rounded">  
        <Col md="auto" className="float-start"><Link to={threadLink}>{msg.title}</Link></Col>
        <Col md="auto" className="float-start">{formatDate(msg.date)}</Col> 
      </Row>
      <Row className="cus-msg-field rounded">
        {msg.text}
      </Row>
    </Container> 
  )
}
export default Thread
